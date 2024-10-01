import {
  fetchAllStaff,
  insertStaff,
  updateStaff,
  deleteStaff,
} from "../lib/db";
export async function GET() {
  const staffs = await fetchAllStaff();
  return new Response(JSON.stringify(staffs));
}
export async function POST(request) {
  //   console.dir(request);
  const staff = await request.json();
  console.log(staff);
  await insertStaff(staff);
  return new Response(JSON.stringify(staff));
}

export async function PUT(request) {
  const staff = await request.json();
  await updateStaff(staff);
  return new Response(JSON.stringify(staff));
}

export async function DELETE(request) {
  const staff = await request.json();
  console.log(staff);
  await deleteStaff(staff.id);
  return new Response(JSON.stringify(staff));
}
