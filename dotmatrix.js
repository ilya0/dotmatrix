https://www.pinterest.com/pin/316589048797299463/


//update display text to new weather condition
    message = "";
    
    //get the current condition
    String condition =  result["current"]["condition"]["text"];
    appendMessage(condition);
    appendMessage(" ");
    String temp_c = result["current"]["temp_c"] ;
    appendMessage(temp_c);
    appendMessage("C");
    appendMessage(" ");
    String humidity = result["current"]["humidity"];
    appendMessage(humidity);
    appendMessage("H");
    appendMessage(" ");
