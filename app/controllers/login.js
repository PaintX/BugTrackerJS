var check = require('../includes/check_dir');
var i18n = require('../helpers/i18n');


function _get (req, res, next)
{
  let objRet = {}
  objRet.warning = [];

  if ( check.checkDirectory('../admin') == false )
  {
    objRet.warning.push({msg : i18n.helper("s_warning_admin_directory_present") });
  }

  
  return objRet;
}

function _post (req, res, next)
{
  return {};
}

module.exports.post = _post;
module.exports.get = _get;