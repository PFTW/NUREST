var prompt = require('../lib/prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get((['Presenter', 'Keynote']), function (err, result) {
    //
    // Log the results.
    //
  
    console.log('  Presenter: ' + result.Presenter);
   
    console.log('  Command-line input received:');
    console.log('  Presenter  ' + result.Presenter)
    console.log('  Keynote: ' + result.Keynote);

 
});
