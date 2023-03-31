/////////////// Ver q valores son falsos y verdaderos por defecto ///////////////////////////

// Valores q dan falso por defecto ///
Boolean(0);
// False

Boolean(null);
// False

Boolean(NaN); // Non A Number
// False

Boolean('');
// False

// Valores q son Verdaderos 
//* Todos objeto q se llame asi este vacio, va a dar true

Boolean([]);
// True

Boolean({});
// True

Boolean(function(){});

