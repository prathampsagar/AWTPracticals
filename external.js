
    function func1()
    {
        alert("Hello World");
    }
     function func2()
     {
            if(confirm("Name Is Correct : "))
            {
                alert("Data Saved.");
            }
            else
            {
                alert("Data Clean.");
            }
    }
        function func3()
        {
            if(prompt("Enter Name : ")=="ad" && prompt("Enter Password : ")=="rt")
            {
                alert("Successfully Login..");
            }
            else
            {
                alert("Successfully Exit..");
            }
        }

        function foreg()
        {
            document.body.style.backgroundColor="grey";
            document.getElementById("unique").style.backgroundColor="yellow";
        }
        
        function normal1()
        {
            document.body.style.backgroundColor="yellow";
            document.getElementById("unique").style.backgroundColor="grey";
        }

        function charges1()
        {
            document.body.style.backgroundColor=document.getElementById("cp1").value;
        }

        function charges2()
        {
            document.getElementById("unique").style.backgroundColor=document.getElementById("cp2").value;
        }
        function useprompt1()
        {
            if(document.body.style.backgroundColor=prompt("Enter Color : "))
            {
                alert("BackGround Color Changed.");
            }
            else
            {
                alert("Please Enter Right Input To Change BackGround Color.");
            }
        }
        function useprompt2()
        {
            if(document.getElementById("unique").style.backgroundColor=prompt("Enter Color : "))
            {
                alert("ForeGround Color Changed.");
            }
            else
            {
                alert("Please Enter Right Input To Change ForeGround Color.");
            }
        }