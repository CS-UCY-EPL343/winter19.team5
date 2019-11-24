// function CustomAlert() {
//     this.render = function (dialog) {
//         var winW = window.innerWidth;
//         var winH = window.innerHeight;
//         var dialogoverlay = document.getElementById('dialogoverlay');
//         var dialogbox = document.getElementById('dialogbox');
//         dialogoverlay.style.display = "block";
//         dialogoverlay.style.height = winH + "px";
//         dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
//         dialogbox.style.top = "100px";
//         dialogbox.style.display = "block";
//         document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
//         document.getElementById('dialogboxbody').innerHTML = dialog;
//         document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
//     }
//     this.ok = function () {
//         document.getElementById('dialogbox').style.display = "none";
//         document.getElementById('dialogoverlay').style.display = "none";
//     }
// }
// var Alert = new CustomAlert();


function hideJourney(id) {

    document.getElementById(id).hidden = true;
}

function addToJourney(id) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    if (document.getElementById(id).hidden === false) {
        Toast.fire({
            icon: 'error',
            title: 'Product already in the Journey'
        });
    } else {
        Toast.fire({
            icon: 'success',
            title: 'Added successfully'
        });
        document.getElementById(id).hidden = false;
    }
}

function hideElement(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            $("#" + id).hide();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}