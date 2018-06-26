var d=document, rez=0, 
          time='60',    
          ball=0,       
          vsego=5,      
          count=0; 

function timer(){
        var obj=document.getElementById('timer');
        
        obj.innerHTML--;
        	  
        if(obj.innerHTML==0){
        
          stopTest();
          setTimeout(function(){},1000);}
          
        else{setTimeout(timer,1000);}
      
      }
      
      
      function startTest(){
        d.getElementById("timer").innerHTML=time;   
        setTimeout(timer,1000);
        d.getElementById("blok").style.display='block';
        d.getElementById("btStart").style.display='none';
      
      }
      
      function stopTest(){
      
        var i=0;
        
        
        for(i=0; i<d.getElementsByName("q1").length; i++){
            
          if(d.getElementsByName("q1")[i].checked) {
            
            if(i==1){rez+=2; count++;}     
          }
        }
        
        
        
        
        for(i=0; i<d.getElementsByName("q2").length; i++){
        
          if(d.getElementsByName("q2")[i].checked) {
            
            if(i==0){rez+=2; count++;}       
            if(i==2){rez+=2; count++;}
          }
        
        }
        
        
        
        for(i=0; i<d.getElementById("q3").options.length; i++){
        
          if(d.getElementById("q3").options[i].selected){
              
              if(i==2){rez+=2; count++;}  
          }  
        }
        
        
        if(d.getElementsByName("q4")[0].value.search("ответ")!=-1){rez+=2; count++;}
        
        
        if(d.getElementsByName("q5")[0].value.search("ответ")!=-1){rez+=2;count++;}
        
        
        alert('Âû íàáðàëè '+((rez/ball)/vsego)*100+' %\nÂû ïðàâèëüíî îòâåòèëè íà '+count+ ' âîïðîñîâ èç '+vsego+'.');         

        d.getElementById("blok").style.display='none';
        d.getElementById("btStart").style.display='block';
        location.reload(true);
        rez=0;
        count=0;
      }
