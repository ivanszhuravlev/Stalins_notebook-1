using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stalins_notebook.Controllers
{
    public class ViewMembersGroupController : Controller
    {
        public ActionResult InfoMarkersContact()
        {
            return PartialView();
        }
        public ActionResult MembersGroupList()
        {
            return PartialView();
        }
        public ActionResult InfoMarkersGroup()
        {
            return PartialView();
        }
    }
}
