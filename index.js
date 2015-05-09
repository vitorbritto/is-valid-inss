/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var isValid = (function() {

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputInss = function(inss) {

            var inssPattern = /^((\d{3})\.){3}\-\d{1}$/;
            return inssPattern.test(inss);

        };

        // INITIALIZE MODULE
        return {
            inss: validate.inputInss
        };

    })();

    // Global
    window.isValid = isValid;

})(window, document);

