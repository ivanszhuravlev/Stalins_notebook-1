using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Stalins_notebook.Models;

namespace Stalins_notebook.Controllers
{
    public class MarkersController : ApiController
    {
        private NotebookContext db = new NotebookContext();

        // GET: api/Markers/5
        public List<Group> Get(int id)
        {
            int idcontact = id;
            int[] idsMarker = db.MembersGroups.Where(g => g.MemberId == idcontact).Select(g => g.GroupId).ToArray();
            List<Group> markersContactArray = new List<Group>();
            for (int i = 0; i < idsMarker.Count(); i++)
            {
                markersContactArray.Add(db.Groups.Find(idsMarker[i]));
            }
            return markersContactArray.OrderBy(g=>g.Name).ToList();
        }
    }
}
