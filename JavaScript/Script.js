        document.getElementById("panel1").style.display = "flex"; // Always show Panel 1

        document.getElementById("math").addEventListener("keydown", function(event) {
            if (event.key === "Enter") { // Check if Enter key is pressed
                let inputValue = this.value; // Get input value
                
                if (inputValue === "24") {
                    document.getElementById("panel2").style.display = "flex"; // Show Panel 2
                } else {
                    document.getElementById("panel2").style.display = "none"; // Hide Panel 2 if condition not met
                }
            }
        });

        document.getElementById("cs").addEventListener("keydown", function(event) {
            if (event.key === "Enter") { // Check if Enter key is pressed
                let binary = this.value; // Get input value
                
                if (binary === "00011000") {
                    document.getElementById("panel3").style.display = "flex"; // Show Panel 2
                } else {
                    document.getElementById("panel3").style.display = "none"; // Hide Panel 2 if condition not met
                }
            }
        });

        document.getElementById("admin").addEventListener("keydown", function(event) {
            if (event.key === "Enter") { // Check if Enter key is pressed
                let admin = this.value; // Get input value
                
                if (admin === "បាវចនាជាតិខ្មែរ") {
                    document.getElementById("panel4").style.display = "flex"; // Show Panel 2
                } else {
                    document.getElementById("panel4").style.display = "none"; // Hide Panel 2 if condition not met
                }
            }
        });

        document.getElementById("military").addEventListener("keydown", function(event) {
            if (event.key === "Enter") { // Check if Enter key is pressed
                let military = this.value; // Get input value
                
                if (military === "AK-47") {
                    document.getElementById("panel5").style.display = "flex"; // Show Panel 2
                } else {
                    document.getElementById("panel5").style.display = "none"; // Hide Panel 2 if condition not met
                }
            }
        });