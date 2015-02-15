(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addresses'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <tr>\r\n        <td>"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</td>\r\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.priv : depth0), depth0))
    + "</td>\r\n        <td><button class=\"btn btn-danger deleteaddr-btn\">Delete</button></td>\r\n    </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.addresses : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['transactions'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "    <tr>\r\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.amount : depth0), depth0))
    + "</td>\r\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.tx : depth0), depth0))
    + "\r\n            (<a href=\"https://ltc.blockr.io/tx/info/"
    + escapeExpression(lambda((depth0 != null ? depth0.tx : depth0), depth0))
    + "\" target=\"_blank\">Blockr</a>)\r\n            (<a href=\"http://explorer.litecoin.net/tx/"
    + escapeExpression(lambda((depth0 != null ? depth0.tx : depth0), depth0))
    + "\" target=\"_blank\">LTC Explorer</a>)\r\n        </td>\r\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.address : depth0), depth0))
    + "</td>\r\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.confirmations : depth0), depth0))
    + "</td>\r\n        <td>"
    + escapeExpression(((helpers.timeSince || (depth0 && depth0.timeSince) || helperMissing).call(depth0, (depth0 != null ? depth0.time_utc : depth0), {"name":"timeSince","hash":{},"data":data})))
    + " ago</td>\r\n    </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.transactions : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['wallet'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"logged_header main_header single\">\r\n    <h1>\r\n        <span class=\"pull-right\" id=\"ltc-balance\">0.00</span>\r\n    </h1>\r\n\r\n    <div class=\"container\">\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li><a href=\"#home\" role=\"tab\" data-toggle=\"tab\">Home</a></li>\r\n            <li><a href=\"#tab_transactions\" role=\"tab\" data-toggle=\"tab\">Transactions</a></li>\r\n            <li><a href=\"#tab_send_coins\" role=\"tab\" data-toggle=\"tab\">Send</a></li>\r\n            <li class=\"active\"><a href=\"#tab_addresses\" role=\"tab\" data-toggle=\"tab\">Receive (manage addresses)</a></li>\r\n            <li><a href=\"#tab_import_export\" role=\"tab\" data-toggle=\"tab\">Import/Export</a></li>\r\n            <li><a href=\"#tab_settings\" role=\"tab\" data-toggle=\"tab\">Settings</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <br><br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\" id=\"alerts-section\">\r\n\r\n        </div>\r\n    </div>\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n        <div class=\"tab-pane\" id=\"home\">...</div>\r\n        <div class=\"tab-pane\" id=\"tab_transactions\">\r\n            <h4>Your Transactions</h4>\r\n\r\n            <table id=\"list-transactions-outer\" class=\"table table-bordered\">\r\n                <thead>\r\n                <th>Amount</th>\r\n                <th>TXID</th>\r\n                <th>Your Address</th>\r\n                <th>Confirmations</th>\r\n                <th>Date</th>\r\n                </thead>\r\n                <tbody id=\"list-transactions\">\r\n                    <tr><td colspan=\"5\">Error loading transactions?</td></tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"tab-pane active\" id=\"tab_addresses\">\r\n\r\n            <table id=\"list-addresses-outer\" class=\"table table-bordered\">\r\n                <thead>\r\n                <th>Address</th>\r\n                <th>Private Key</th>\r\n                <th>Delete?</th>\r\n                </thead>\r\n                <tbody id=\"list-addresses\">\r\n                    <tr><td colspan=\"3\">Error loading addresses?</td></tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <button id=\"generate-btn\" class=\"btn btn-default\">Generate New Address</button>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"tab_send_coins\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"alert alert-danger\">Note: You will get an error if you try to send\r\n                    multiple transactions in a short period of time. This is because you cannot send\r\n                    unconfirmed coins yet.</div>\r\n\r\n                    <div class=\"well\">\r\n                        This service is not ran as a business and relies on the community to keep it alive. If you use the service, please\r\n                        donate, even just $1 in Litecoins contribute towards development time, and server costs.<br/>\r\n                        <br/>\r\n                        Donate to Litevault to keep us running: <br/><br/>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">\r\n                                <h4 class=\"panel-title\">Litecoin</h4>\r\n                            </div>\r\n                            <div class=\"panel-body\">\r\n                                LNWEjx3DKSAWKX5fkWfCwa2tWSQeo7ZmnR\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">\r\n                                <h4 class=\"panel-title\">Bitcoin</h4>\r\n                            </div>\r\n                            <div class=\"panel-body\">\r\n                                17PPTHmS8N34KYKdDc4Gn1psabteGS8EE3\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h4>Exchange Rates</h4>\r\n                    <ul id=\"exchange-rates\">\r\n                        <li>Under Construction</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                    <h4>Send LTC</h4>\r\n                    <div class=\"input-group-lg\">\r\n                        <label for=\"from-address\">From Address</label>\r\n                        <select name=\"my-addresses\" id=\"select-my-addresses\" class=\"form-control\"></select>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <div class=\"input-group form-inline\">\r\n                                <label for=\"to-address\">Recipient Address</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"to-address\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"input-group form-inline\">\r\n                                <label for=\"to-address\">Amount to send</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"send-coins-amount\" placeholder=\"0.0000\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr/>\r\n                    <button class=\"btn btn-default\" id=\"send-coins-btn\">Send Coins</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"tab_import_export\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 form-inline\">\r\n                    <h4>Import</h4>\r\n                    <div class=\"input-group\">\r\n                        <p class=\"form-control-static\">Import Key (WIF)</p>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"import-address\" />\r\n                    </div>\r\n                    <button class=\"btn btn-default\" id=\"import-btn\">Import</button>\r\n                </div>\r\n                <div class=\"col-md-9\">\r\n                    <h4>Export</h4>\r\n                    <a href=\"javascript:void(0);\" id=\"export-wallet-json-link\">Export Wallet (JSON)</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"tab_settings\">\r\n            <h3>Security</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 form-inline\">\r\n                    <label for=\"account-email\">Your Email (optional): </label>\r\n                    <input type=\"text\" id=\"account-email\" class=\"form-control\"/>\r\n                    <button class=\"btn btn-default\" id=\"save-email\">Save Email</button>\r\n                </div>\r\n            </div>\r\n            <hr/>\r\n            <h4>2-Factor Authentication</h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <strong>2-Factor Authentication Status: <strong id=\"2fa-status\" style=\"color:red\">Disabled</strong></strong>\r\n                    <button class=\"btn btn-default\" id=\"configure-gauth\">Enable/Modify 2-Factor Authentication</button>\r\n\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <div class=\"well\">\r\n                    <p>NOTE: This is a beta feature. Please make sure you backup your wallet often when using 2-Factor authentication.\r\n                            If you find any bugs with 2-Factor authentication, please report them to\r\n                            <a href=\"mailto:info+security@someguy123.com\">info+security@someguy123.com</a> </p>\r\n                        <p>If you have 2-Factor authentication enabled, the button \"Enable/Modify\" will also allow you to replace it\r\n                            with a new 2-Factor token, for example if you reset or get a new phone.</p>\r\n                        <p>If you would like to disable 2-Factor authentication, please contact support</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"deleteAddressModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Deleting Address</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <h3>Warning: You're deleting an address!</h3>\r\n                    <h4 style=\"color:#ff0000\">This action is irreversible, please make sure you're absolutely sure\r\n                        you want to do this, the private key will be removed from your account and you will lose\r\n                        access to any funds stored in this address unless you have a backup of the private key somewhere.</h4>\r\n                    <p>The address you are deleting is <strong id=\"deletingAddress\"></strong></p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" id=\"i-am-sure-delete\" class=\"btn btn-danger\" data-dismiss=\"modal\">I'm sure I want to delete this address</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"exportWalletModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exportWalletModalLabel\"\r\n         aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                            aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\" id=\"exportWalletModalLabel\">Exporting Wallet</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <textarea id=\"wallet-exported-txt\" class=\"form-control\" cols=\"20\" rows=\"30\" style=\"height: 300px;\"></textarea>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Done</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"configGauthModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"configGauthModalLabel\"\r\n         aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                            aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\" id=\"configGauthModalLabel\">Setting up Google Authenticator (or other TOTP\r\n                        app)</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p style=\"color: red\"><strong>IMPORTANT, READ BEFORE CONTINUING: </strong> Please make sure that you\r\n                    have an email set in your account settings. If you don't have one and you lose access to your 2FA app for\r\n                    any reason, you won't be able to get back into your account.</p>\r\n                    <div class=\"qrcode_container text-center\" id=\"modal-gauth-qr\">\r\n\r\n                    </div>\r\n                    <p>Manual key entry: <strong id=\"modal-gauth-secret\"></strong></p>\r\n                    <p>To enable 2 Factor Authentication, scan the QR code above into your favourite authenticator app\r\n                    such as <strong>Google Authenticator</strong> or <strong>Authy</strong>. Once done, enter the access\r\n                    token you get from the app into the text box below, it looks like <strong>123456</strong>.</p>\r\n                    <label for=\"modal-gauth-token\">Your 2FA token from the app:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"modal-gauth-token\" placeholder=\"e.g. 123456\"/>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" id=\"confirm-setup-2fa\">Set Up 2FA</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"completeGauthModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"completeGauthModalLabel\"\r\n         aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                            aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\" id=\"completeGauthModalLabel\">You have successfully enabled 2FA for your\r\n                        account.</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>You've just enabled 2FA for your account. </p>\r\n                    <p>Please be aware that from now on you will be required to\r\n                    enter a token from your 2FA application approximately once a week for security, where-as untrusted computers\r\n                    will be de-authorized within 2 hours. </p>\r\n                    <p>If you decide that you don't want 2FA, or run into a problem with the\r\n                    application, you will be able to disable it from this computer using your password for the next week, without\r\n                    being required to enter a 2FA token.</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Okay</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
  },"useData":true});
})();