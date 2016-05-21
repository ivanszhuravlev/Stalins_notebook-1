using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stalins_notebook.Controllers
{
    public class EditController : Controller
    {
        
        public ActionResult EditContactForm()
        {
            return PartialView();
        }
        public ActionResult EditGroupForm()
        {
            return PartialView();
        }
    }
}