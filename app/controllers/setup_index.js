var config = require('../config/config');

function DisplayPreInstall()
{
    // Check the Database support on the server.
    CheckDatabaseSupport();
}

/**
 * Function to check the availability of the Database support
 * @param void
 * @return void
 */
function CheckDatabaseSupport()
{
    let status = [];

    config.mSupportedDatabases.map(function(database) {
        // If the Application(Flyspray) supports the available database supported in PHP
        config.mAvailableDatabases.push({name : database , supported : true , status : true });
    });
}

/**
 * Function to act on all the actions during Flyspray Setup
 * The Post variables are extracted for deciding which function to call.
 */
function ProcessActions()
{
    let action = 'index';
    let what = '';

    switch ( action )
    {
        case ( 'database' ):
        {
            break;
        }
        case ( 'administration' ):
        {
            break;
        }
        case ( 'complete' ):
        {
            break;
        }
        default :
        {
            DisplayPreInstall();
            break;
        }
    }
}

function _get (req, res, next)
{
    ProcessActions();
    return {};
}

function _post (req, res, next)
{
    ProcessActions();
    return {};
}

module.exports.get = _get;
module.exports.post = _post;