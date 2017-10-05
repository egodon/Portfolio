$(() =>{
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        let data = {}
        $(this).serializeArray().forEach((input) => {
            data[input.name] = input.value;
        })
        
        $.ajax({
            url: "https://usebasin.com/f/55090f1bd423.json",
            method: "POST",
            data,
            dataType: "json"
          });

        const $submitBtn = $('#submit-btn');
        $submitBtn.addClass('form-submitted');
        $submitBtn.text('');
        $submitBtn.append(`<div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-red-only">
            <div class="circle-clipper left">
                    <div class="circle"></div>
            </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                    </div>
                </div>
            </div>`)

        setTimeout(()=>{
            $submitBtn.empty();
            $submitBtn.text('Message sent!');
            $submitBtn.addClass('form-submitted');


            $.each($('.form-input'),(key,value) => {
                $(value).val('');
            })
        }, 1500);
    });

    



});