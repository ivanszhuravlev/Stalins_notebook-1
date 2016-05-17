using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stalins_notebook.Controllers
{
    public class CreateController : Controller
    {
        public ActionResult CreateContactForm()
        {
            return PartialView();
        }
        public ActionResult CreateGroupForm()
        {
            return PartialView();
        }
    }
}