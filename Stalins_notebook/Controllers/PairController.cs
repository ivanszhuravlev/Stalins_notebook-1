using System;
using System.Collections.Generic;
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

using System.Web.Mvc;

namespace Stalins_notebook.Controllers
{
    public class PairController : ApiController
    {
        private NotebookContext db = new NotebookContext();

        // DELETE: api/MembersGroups/5
        [ResponseType(typeof(MembersGroup))]
        public async Task<IHttpActionResult> DeletePair(Pair pair)
        {

            int idmg = db.MembersGroups.Where(mg => mg.GroupId == pair.idgroup).Where(mg => mg.MemberId == pair.idcontact).Select(mg => mg.MembersGroupId).ToList().First();
            MembersGroup membersGroup = await db.MembersGroups.FindAsync(idmg);
            if (membersGroup == null)
            {
                return NotFound();
            }

            db.MembersGroups.Remove(membersGroup);
            await db.SaveChangesAsync();

            return Ok(membersGroup);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MembersGroupExists(int id)
        {
            return db.MembersGroups.Count(e => e.MembersGroupId == id) > 0;
        }

    }
}
