
function Fare() {
            const baseFare = 13;
            var origin = document.getElementById('leaving').value;
            var destination = document.getElementById('going').value;

            var fare = baseFare + (destination - origin);
            document.getElementById('ticketPrice').textContent = fare.toFixed(2);
        }

 function Discount() {
            const baseFare = 13;
            var origin = document.getElementById('leaving').value;
            var destination = document.getElementById('going').value;

            var regularFare = baseFare + (destination - origin);
            var discount = regularFare * 0.8;
            document.getElementById('ticketPrice').textContent = discount.toFixed(2);
        }
