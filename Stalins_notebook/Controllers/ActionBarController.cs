using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stalins_notebook.Controllers
{
    public class ActionBarController : Controller
    {
        public ActionResult ActionBarContact()
        {
            return PartialView();
        }
        public ActionResult ActionBarGroup()
        {
            return PartialView();
        }
    }
}