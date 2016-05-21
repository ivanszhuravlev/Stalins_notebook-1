using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Web;
using System.Web.Mvc;
using Stalins_notebook.Models;
using System.Threading.Tasks;

namespace Stalins_notebook.Controllers
{
    public class MainController : Controller
    {

        public ActionResult Main()
        {
            return View();
        }

        public ActionResult ProfilePage()
        {
            return View();
        }

    }
}