FROM mcr.microsoft.com/windows/servercore:ltsc2019 
  
LABEL maintainer="cloud1"                          
                          
ARG pw="shamshu@99"             
RUN echo #-iisadmin-password: %pw% & net user iisadmin %pw% /add && net localgroup administrators iisadmin /add   
    
         
RUN powershell -Command \    
    Install-WindowsFeature -Name web-server, web-cgi, web-http-redirect, web-cert-auth, web-includes, web-mgmt-service; \
    Set-ItemProperty -Path  HKLM:\SOFTWARE\Microsoft\WebManagement\Server -Name EnableRemoteManagement  -Value 1; \
    Set-Service -name WMSVC  -StartupType Automatic; \
    Start-service WMSVC; \    
    Remove-Item C:\inetpub\wwwroot\* -Recurse -Force;         
    
EXPOSE 80 443 3389                         
                                                          
     
ENV PHP_HOME="C:\php"      
RUN powershell -Command \
    $AllProtocols = [System.Net.SecurityProtocolType]'Ssl3,Tls,Tls11,Tls12'; \  
    [System.Net.ServicePointManager]::SecurityProtocol = $AllProtocols; \  
    Invoke-WebRequest -UseBasicParsing -Uri 'https://windows.php.net/downloads/releases/php-7.3.33-nts-Win32-VC15-x64.zip' -OutFile 'C:\php.zip'; \
    if ((Get-FileHash 'C:\php.zip' -Algorithm sha256).Hash -ne '5eaf3cad80e678623f222a42c99bcefcc60eea359d407fb51e805afdb3b13e5e') { exit 1 }; \
    Expand-Archive -Path 'C:\php.zip' -DestinationPath $env:PHP_HOME; \ 
    Remove-Item 'C:\php.zip'; \
    Move-Item ($env:PHP_HOME + '\php.ini-development') ($env:PHP_HOME + '\php.ini'); \     
    $env:PATH = $env:PATH + ';' + $env:PHP_HOME; \
    [Environment]::SetEnvironmentVariable('PATH', $env:PATH, [EnvironmentVariableTarget]::Machine);

RUN %WinDir%\System32\InetSrv\appcmd.exe set config /section:system.webServer/handlers /+[name='PHP-FastCGI',path='*.php',verb='*',modules='FastCgiModule',scriptProcessor='',resourceType='Either']
RUN %WinDir%\System32\InetSrv\appcmd.exe set config /section:system.webServer/fastCgi /+[fullPath='C:\PHP73\php-cgi.exe']
RUN %windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/fastCgi /+[fullPath='C:\PHP73\php-cgi.exe'].environmentVariables.[name='PHP_FCGI_MAX_REQUESTS',value='10000'] 
RUN %windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/fastCgi /+[fullPath='C:\PHP73\php-cgi.exe'].environmentVariables.[name='PHPRC',value='C:\php'] 
RUN %windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/fastCgi /[fullPath='C:\PHP73\php-cgi.exe'].instanceMaxRequests:10000 
RUN %windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/defaultDocument /enabled:true /+files.[value='index.php']
RUN %WinDir%\System32\InetSrv\appcmd.exe set config /section:system.webServer/staticContent /+[fileExtension='.php',mimeType='application/php'] 
RUN %systemroot%\system32\inetsrv\appcmd.exe add site /name:VolodyWebApps /id:2 /bindings:http/*:3000: /physicalPath:C:\inetpub\VolodyWebApps
RUN %systemroot%\system32\inetsrv\appcmd.exe add app /site.name:VolodyWebApps /path:/App1 /physicalPath:C:\inetpub\VolodyWebApps\App1  
RUN %systemroot%\system32\inetsrv\APPCMD add vdir /app.name:"VolodyWebApps/" /path:/Testing /physicalPath:C:\inetpub\VolodyWebApps\Testing
RUN %systemroot%\system32\inetsrv\appcmd.exe add apppool /name:VolodyWebApps
RUN %systemroot%\system32\inetsrv\appcmd.exe set app "VolodyWebApps/" /applicationPool:VolodyWebApps  

   
    
     
ADD https://download.microsoft.com/download/6/A/A/6AA4EDFF-645B-48C5-81CC-ED5963AEAD48/vc_redist.x64.exe /VC_redist.x64.exe   
RUN C:\vc_redist.x64.exe /quiet /install        
  
         
RUN powershell -Command \  
    Invoke-WebRequest -UseBasicParsing -Uri "https://dotnetbinaries.blob.core.windows.net/servicemonitor/2.0.1.6/ServiceMonitor.exe" -OutFile "C:\ServiceMonitor.exe";


ENTRYPOINT [ "C:\\ServiceMonitor.exe", "w3svc" ]      
         
            