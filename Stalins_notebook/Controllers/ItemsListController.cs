using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stalins_notebook.Controllers
{
    public class ItemsListController : Controller
    {
        public ActionResult GroupsList()
        {
            return PartialView();
        }
        public ActionResult ContactsList()
        {
            return PartialView();
        }
        public ActionResult MembersList()
        {
            return PartialView();
        }
        public ActionResult MarkersList()
        {
            return PartialView();
        }
    }
}