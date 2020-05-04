$(document).ready(function GetData()
{
    $.ajax({
    url: 'http://127.0.0.1:8000/employees/',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        console.log("Hello", data);
        var x="";
        {
            data.map((value, index) => 
            {
                x=x+(
                    `<tr>
                    <td>${value.employee_name}</td>
                    
                    <td>${value.employee_designation}</td>
                    <td>
                    <button id="btn deleteBtn" data-id="${value.id}" onclick="deletee(${value.id})">Delete</button>
                    <button id="updateBtn" data-id="${value.id}" onclick="updateEmployee(${value.id})">Update</button>
                    </td>
                    </tr>`
                    )
            })
            document.getElementById('employee-table-body').innerHTML= x;
        }               
           
    }
});   
})
function updateEmployee(employeeid)
{   
    document.getElementById("updateform").style.display="block";
    $("#updateform").submit(function(event)
    {
        event.preventDefault()
        $.ajax(
            {
            type:'PUT',
            url:`http://127.0.0.1:8000/employees/${employeeid}`,
            data:
            {
                employee_name:$('#updatedename').val(),
                employee_designation:$('#updatededes').val(),
            },
            success:function(json)
            {
                document.getElementById("updateform").reset();
                window.location.reload()
                
            },
            error : function(err) 
            {
            console.log(err);
            }
        });
    });  
}

function  deletee(employeeid){
    console.log("HELLLOO---", employeeid)
    $.ajax({
        url:  `http://127.0.0.1:8000/employees/${employeeid}`,
        type:  'delete',
        dataType:  'json',
        success:  function (data) {
        alert('Employee Removed!')
        window.location.reload()
        }
    });
}
$(document).ready(function OnSubmit()
{
    $("#employeeform").submit(function(event)
    {
        event.preventDefault()
        $.ajax(
            {
            type:'POST',
            url:'http://127.0.0.1:8000/employees/',
            data:
            {
                employee_name:$('#ename').val(),
                employee_designation:$('#edes').val(),
            },
            success:function(json)
            {
                document.getElementById("employeeform").reset();
                window.location.reload()
                
            },
            error : function(err) 
            {
            console.log(err);
            }
        });
    });
});
