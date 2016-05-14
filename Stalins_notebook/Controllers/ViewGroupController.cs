using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Stalins_notebook.Models;

namespace Stalins_notebook.Controllers
{
    public class ViewGroupController : Controller
    {
        private NotebookContext db = new NotebookContext();
        public ActionResult CreateEditGroupForm()
        {
            return PartialView();
        }

        public ActionResult GroupsList()
        {
            return PartialView();
        }
        public ActionResult Group()
        {
            return PartialView();
        }
        public ActionResult ActionBarGroup()
        {
            return PartialView();
        }
    }
}