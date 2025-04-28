(function(){
    'use strict';
    console.log('reading js');

    async function getData() {
        const myData = await fetch('data/data.json');
        const data = await myData.json();
        console.log(data);
        document.querySelector('#result').textContent = outputResults(data);
    }

    function outputResults(data){
        document.querySelector('#monc').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Monday Driving: ${data['Monday Driving']} mile</p>`;
        });
        document.querySelector('#monb').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Monday Biking: ${data['Monday Biking']} miles</p>`;
        });
        document.querySelector('#tuesc').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Tuesday Driving: ${data['Tuesday Driving']} miles</p>`;
        });

        document.querySelector('#tuesb').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Tuesday Biking: ${data['Tuesday Biking']} miles</p>`;
        });

        document.querySelector('#wednesc').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Wednesday Driving: ${data['Wednesday Driving']} miles</p>`;
        });

        document.querySelector('#wednesb').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Wednesday Biking: ${data['Wednesday Biking']} miles</p>`;
        });

        document.querySelector('#thursc').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Thursday Driving: ${data['Thursday Driving']} miles</p>`;
        });

        document.querySelector('#thursb').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Thursday Biking: ${data['Thursday Biking']} miles</p>`;
        });

        document.querySelector('#fric').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Friday Driving: ${data['Friday Driving']} miles</p>`;
        });

        document.querySelector('#frib').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Friday Biking: ${data['Friday Biking']} miles</p>`;
        });

        document.querySelector('#saturc').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Saturday Driving: ${data['Saturday Driving']} miles</p>`;
        });

        document.querySelector('#saturb').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Saturday Biking: ${data['Saturday Biking']} miles</p>`;
        });

        document.querySelector('#sunc').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Sunday Driving: ${data['Sunday Driving']} miles</p>`;
        });

        document.querySelector('#sunb').addEventListener('mouseover', function() {
            document.querySelector('#result').innerHTML = `<p>Sunday Biking: ${data['Sunday Biking']} miles</p>`;
        });
    }

    getData();

}());