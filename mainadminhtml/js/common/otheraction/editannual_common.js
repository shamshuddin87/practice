website(document).ready(function()
{
  
   
    
});





function addhtml(clicked)
 {




 var id = clicked;
 //alert(id);
 if(id == 'adddiv1') {
         
         var getlastid = website('.appendd1').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
         addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
         addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >  <label class="control-label">Company Name</label>   <input type="text" class="form-control inputbox3" id="d1ques1" name="d1ques1[]" >  </div> </section>';
         addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input"><label class="control-label">Can you significantly influence the decision making of this company?</label><select id="d1ques2" name="d1ques2[]" class="form_fields form-control col-md-7 col-xs-12" required="" ><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
          addhtmlnxt+=' <section class="col col-md-6 col-xs-6"><div class="input"><label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label><select id="d1ques3" name="d1ques3[]" class="form_fields form-control col-md-7 col-xs-12" required="" ><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
        //addhtmlnxt += '<section class="col col-md-6 col-xs-6"><div class="input"><label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddy's Laboratories Limited or any of its group company/subsidiary?</label><select id="d1ques3" name="d1ques3[]" class="form_fields form-control col-md-7 col-xs-12" required=""><option value="1">Yes</option> <option value="0">No</option></select> </div></section>';
         addhtmlnxt += '</div>';

      
         website('.appenddiv1').append(addhtmlnxt);
       
        website('.appendd1').attr('plancntr',getlastid);
      }
      else if(id == 'adddiv2'){
      
       var getlastid = website('.appendd2').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
         addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
         addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >   <label class="control-label">Firm Name</label> <input type="text" class="form-control inputbox4" id="d2ques1" name="d2ques1[]" >  </div> </section>';
         addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Nature of Interest</label><input type="text" class="form-control inputbox4" id="d2ques2" name="d2ques2[]" ></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input"> <label class="control-label">Can you significantly influence the decision making of this company?</label> <select id="d2ques3" name="d2ques3[]" class="form_fields form-control col-md-7 col-xs-12 selectbox4" required="" style="margin-top:40px;"><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input">  <label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label>  <select id="d2ques4" name="d2ques4[]" class="form_fields form-control col-md-7 col-xs-12" required=""><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
       
         addhtmlnxt += '</div>';

      
         website('.appenddiv2').append(addhtmlnxt);
       
        website('.appendd2').attr('plancntr',getlastid);



      } else if(id == 'adddiv3'){
      
       var getlastid = website('.appendd3').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
         addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
         addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >   <label class="control-label">Company Name</label> <input type="text" class="form-control inputbox4" id="d3ques1" name="d3ques1[]" >  </div> </section>';
         addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Nature of Interest</label><input type="text" class="form-control inputbox4" id="d3ques2" name="d3ques2[]" ></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input"> <label class="control-label">Can you significantly influence the decision making of this company?</label> <select id="d3ques3" name="d3ques3[]" class="form_fields form-control col-md-7 col-xs-12 selectbox4" required="" ><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input">  <label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label>  <select id="d3ques4" name="d3ques4[]" class="form_fields form-control col-md-7 col-xs-12" required=""><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
       
         addhtmlnxt += '</div>';

      
         website('.appenddiv3').append(addhtmlnxt);
       
        website('.appendd3').attr('plancntr',getlastid);



      }

      else if(id == 'adddiv4'){
      
       var getlastid = website('.appendd4').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
         addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
         addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >   <label class="control-label">Company Name</label> <input type="text" class="form-control inputbox4" id="d4ques1" name="d4ques1[]" >  </div> </section>';
         addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Nature of Interest</label><input type="text" class="form-control inputbox4" id="d4ques2" name="d4ques2[]" ></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input"> <label class="control-label">Can you significantly influence the decision making of this company?</label> <select id="d4ques3" name="d4ques3[]" class="form_fields form-control col-md-7 col-xs-12 selectbox4" required="" ><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input">  <label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label>  <select id="d4ques4" name="d4ques4[]" class="form_fields form-control col-md-7 col-xs-12" required=""><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
       
         addhtmlnxt += '</div>';

      
         website('.appenddiv4').append(addhtmlnxt);
       
        website('.appendd4').attr('plancntr',getlastid);



      }
       else if(id == 'adddiv5')
       {
      
       var getlastid = website('.appendd5').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
         addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
         addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >  <label class="control-label">Relative Name</label>   <select id="d5ques1" name="d5ques1[]" class="form_fields form-control col-md-7 col-xs-12 inputbox4" required="" ><option value="1">HUF</option> <option value="2">Spouse</option> <option value="3">Father</option><option value="4">Mother</option>  <option value="5">Brother</option> <option value="6">Sister</option> <option value="7">Son</option>  <option value="8">Daughter</option> <option value="9">Sons Wife</option><option value="10">Daughters Husband</option> <option value="11">Others</option> </select>  </div> </section>';
         addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Company Name</label> <input type="text" class="form-control inputbox4" id="d5ques2" name="d5ques2[]" ></div></section>';
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input"> <label class="control-label">Can you significantly influence the decision making of this company?</label> <select id="d5ques3" name="d5ques3[]" class="form_fields form-control col-md-7 col-xs-12 selectbox4" required="" > <option value="1">HUF</option> <option value="2">Spouse</option> <option value="3">Father</option><option value="4">Mother</option>  <option value="5">Brother</option> <option value="6">Sister</option> <option value="7">Son</option>  <option value="8">Daughter</option> <option value="9">Sons Wife</option><option value="10">Daughters Husband</option> <option value="11">Others</option></select></div></section>';
 
          addhtmlnxt+=' <section class="col col-md-4 col-xs-4"><div class="input">  <label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label>  <select id="d5ques4" name="d5ques4[]" class="form_fields form-control col-md-7 col-xs-12 " required=""><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
       
         addhtmlnxt += '</div>';

      
         website('.appenddiv5').append(addhtmlnxt);
       
        website('.appendd5').attr('plancntr',getlastid);



      }


       else if(id == 'adddiv6')
       {
      
       var getlastid = website('.appendd6').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
        addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
        addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >  <label class="control-label">Relative </label>   <select id="d6ques1" name="d6ques1[]" class="form_fields form-control col-md-7 col-xs-12 inputbox5" required="" ><option value="1">HUF</option> <option value="2">Spouse</option> <option value="3">Father</option><option value="4">Mother</option>  <option value="5">Brother</option> <option value="6">Sister</option> <option value="7">Son</option>  <option value="8">Daughter</option> <option value="9">Sons Wife</option><option value="10">Daughters Husband</option> <option value="11">Others</option> </select>  </div> </section>';
        addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Firm Name</label> <input type="text" class="form-control inputbox5" id="d6ques2" name="d6ques2[]" ></div></section>';
        addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Nature of Interest</label>  <input type="text" class="form-control inputbox5" id="d6ques3" name="d6ques3[]" ></div></section>';
        addhtmlnxt+=' <section class="col col-md-3 col-xs-3"><div class="input">    <label class="control-label">Can you significantly influence the decision making of this company?</label>  <select id="d6ques4" name="d6ques4[]" class="form_fields form-control col-md-7 col-xs-12 selectbox5" required="" ><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
        addhtmlnxt+=' <section class="col col-md-3 col-xs-3"><div class="input">  <label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label>  <select id="d6ques5" name="d6ques5[]" class="form_fields form-control col-md-7 col-xs-12" required=""><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
        addhtmlnxt += '</div>';

      
         website('.appenddiv6').append(addhtmlnxt);
       
        website('.appendd6').attr('plancntr',getlastid);

      }


       else if(id == 'adddiv7')
       {
      
       var getlastid = website('.appendd7').attr('plancntr');

         getlastid = ++getlastid;
         var addhtmlnxt='';
       
        addhtmlnxt += '<div class="col-md-12 row'+getlastid+'" style="padding-bottom:20px;" id="row'+getlastid+'" >';
        addhtmlnxt += '<section class="col col-md-2 col-xs-2">  <div class="input" >  <label class="control-label">Relative </label>   <select id="d7ques1" name="d7ques1[]" class="form_fields form-control col-md-7 col-xs-12 inputbox5" required="" style="margin-top:100px;"><option value="1">HUF</option> <option value="2">Spouse</option> <option value="3">Father</option><option value="4">Mother</option>  <option value="5">Brother</option> <option value="6">Sister</option> <option value="7">Son</option>  <option value="8">Daughter</option> <option value="9">Sons Wife</option><option value="10">Daughters Husband</option> <option value="11">Others</option> </select>  </div> </section>';
        addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Company Name</label> <input type="text" class="form-control inputbox5" id="d7ques2" name="d7ques2[]" ></div></section>';
        addhtmlnxt+=' <section class="col col-md-2 col-xs-2"><div class="input">  <label class="control-label">Nature of Interest</label>  <input type="text" class="form-control inputbox5" id="d7ques3" name="d7ques3[]" ></div></section>';
        addhtmlnxt+=' <section class="col col-md-3 col-xs-3"><div class="input">    <label class="control-label">Can you significantly influence the decision making of this company?</label>  <select id="d7ques4" name="d7ques4[]" class="form_fields form-control col-md-7 col-xs-12 selectbox5" required="" ><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
        addhtmlnxt+=' <section class="col col-md-3 col-xs-3"><div class="input">  <label class="control-label">Do this company have any commercial or financial transactions with Dr. Reddys Laboratories Limited or any of its group company/subsidiary?</label>  <select id="d7ques5" name="d7ques5[]" class="form_fields form-control col-md-7 col-xs-12" required=""><option value="1">Yes</option> <option value="0">No</option> </select></div></section>';
        
         addhtmlnxt += '</div>';

      
         website('.appenddiv7').append(addhtmlnxt);
       
         website('.appendd7').attr('plancntr',getlastid);



      }

      else{
      
       var addhtmlnxt='';
      
      }

}

function removehtml(clicked)
 {

    var rmid = clicked;

    if(rmid == 'remvdiv1')
    {


        var count = website('.appendd1').attr('plancntr');

        if(count != 1)
        {
           
              website('.appenddiv1 #row'+count).remove();
              website('.appendd1').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }

    }else if(rmid == 'remvdiv2'){

        var count = website('.appendd2').attr('plancntr');
        if(count != 1)
        {
              website('.appenddiv2 #row'+count).remove();
              website('.appendd2').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }
    }else if(rmid == 'remvdiv3'){


       var count = website('.appendd3').attr('plancntr');
        if(count != 1)
        {
              website('.appenddiv3 #row'+count).remove();
              website('.appendd3').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }
    }else if(rmid == 'remvdiv4'){


       var count = website('.appendd4').attr('plancntr');
        if(count != 1)
        {
              website('.appenddiv4 #row'+count).remove();
              website('.appendd4').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }
    }else if(rmid == 'remvdiv5'){

      var count = website('.appendd5').attr('plancntr');
        if(count != 1)
        {
              website('.appenddiv5 #row'+count).remove();
              website('.appendd5').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }
    }else if(rmid == 'remvdiv6'){

      var count = website('.appendd6').attr('plancntr');
        if(count != 1)
        {
              website('.appenddiv6 #row'+count).remove();
              website('.appendd6').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }
    }else if(rmid == 'remvdiv7'){



      var count = website('.appendd7').attr('plancntr');
        if(count != 1)
        {
              website('.appenddiv7 #row'+count).remove();
              website('.appendd7').attr('plancntr',parseInt(count)-1);
        }
        else
        {
             return false;
        }
    }else{

     return false;

    }


}






function numberOnly() 
{
            var charCode = event.keyCode;
    
            if ((charCode > 47 && charCode < 58) || charCode == 46)

                return true;
            else
                return false;
}