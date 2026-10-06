const scriptURL = "https://script.google.com/macros/s/AKfycbyscH_7wQuzBId-R1GfkPu3p9BrU7jIhPJwXbx3FdwqX6T48Z0QbSXB0H1g5q46OKNM/exec";

document.getElementById("myForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(this);

    try {

        const response = await fetch(scriptURL,{
            method:"POST",
            body:formData
        });

        if(response.ok){

            alert("اطلاعات با موفقیت ثبت شد");
            this.reset();

        } else {

            alert("خطا در ثبت اطلاعات");

        }

    } catch(error){

        alert("خطا در ارتباط با سرور");
        console.error(error);

    }

});
