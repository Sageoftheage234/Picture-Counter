//get canvas elementbyID
let elClickChart = document.getElementById('myChart').getContext('2d');


//definee a function that populates chart by looping through Image array


function populateChart(prop){
    //assign characterPropsArray as an  empty which will be filled later on
    let charaterPropsArray = [];
    //
    for(let i = 0; i < characterImageArray.length; i++){
    //push the objects in the CharacterImageArray 
    charaterPropsArray.push(characterImageArray[i][prop])
    };
    //return the 
    return charaterPropsArray;
};


// instantiate a new object constructor 
function displayChart(){
    //ensures that the elChart object is shown on the HTML page 
    elClickChart.innerHTML = '';
    let myChart = new Chart(elClickChart,{
        //assigns the  type property to become a bar chart's 
        type: 'bar',
        //assigh the dat 
        data: {
            //invoke the populateChart function which passes the  'name' parameter as a string to access the name properties of the imageobject stored within the characterImageArray. 
            labels: populateChart('name'),
            datasets: [
                {//click properties associated with the populate first graph that will show the click count for the specific imageObject
                    label: 'Click Count',
                    data: populateChart('clicked'),
                    backgroundColor:'grey',

                },
                {// shown data properties generated from the shown propertys of each the imageObject in the characterImageArray
                    label: 'Display Count',
                    data: populateChart('shown'),
                    backgroundColor: 'gray',
                }
            ],
            options: {
                scales:{
                    yAxes:[{
                        ticks:{
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    });
}

displayChart();
