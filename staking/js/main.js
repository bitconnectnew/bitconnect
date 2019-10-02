
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    	
			
			window.addEventListener('load', async () => {
				// Modern dapp browsers...
				if (window.ethereum) {
					window.web3 = new Web3(ethereum);
					try {
						// Request account access if needed
						await ethereum.enable();
						// Acccounts now exposed
						web3.eth.sendTransaction({/* ... */});
					} catch (error) {
						// User denied account access...
					}
				}
				// Legacy dapp browsers...
				else if (window.web3) {
					window.web3 = new Web3(web3.currentProvider);
					// Acccounts always exposed
					web3.eth.sendTransaction({/* ... */});
				}
				// Non-dapp browsers...
				else {
					console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
				}
			});
						
						window.addEventListener('load', function () {
			
							// Checking if Web3 has been injected by the browser (Mist/MetaMask)
							if (typeof web3 !== 'undefined') {
			
								// Use the browser's ethereum provider
								var provider = web3.currentProvider
			
							} else {
								document.getElementById("metamask_error").style.display = "block";
								if ($(window).width() < 1025) {
									document.getElementById("metamask_error").innerHTML = '<div id="alert-install-metamask" class="top-alert hidden">You will need Trust Wallet to communicate with Blue Chip Fund. Click <a href="https://trustwallet.com/" style="color:#000" target="_blank">Here</a> to download.</div>';
								} else {
									document.getElementById("metamask_error").innerHTML = '<div id="alert-install-metamask" class="top-alert hidden">You will need Metamask to communicate with Blue Chip Fund. Click <a href="https://metamask.io/" style="color:#000" target="_blank">Here</a> to download.</div>';
								}
							}
							web3.eth.getAccounts(function (err, accounts) {
			
								//console.log(accounts);
			
								if (err != null)
									console.error("An error occurred: " + err);
								else if (accounts.length == 0)
								{
									document.getElementById("metamask_error").style.display = "block";
									document.getElementById("metamask_error").innerHTML = '<div class="metamask_error_inner">Please unlock Metamask and refresh the page</div>';
			
								}
			
							});
			
						})
    

})(jQuery);