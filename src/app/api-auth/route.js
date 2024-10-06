import {
  fetchAllStaff,
  insertStaff,
  updateStaff,
  deleteStaff,
} from "../lib/db";

// Set your valid API key here
const VALID_API_KEY = "my-secret-key";

// Helper function to check for a valid authentication header
function isAuthenticated(request) {
  const apiKey = request.headers.get("x-api-key");
  return apiKey === VALID_API_KEY;
}

export async function GET(request) {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const staffs = await fetchAllStaff();
  return new Response(JSON.stringify(staffs));
}

export async function POST(request) {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const staff = await request.json();
  console.log(staff);
  await insertStaff(staff);
  return new Response(JSON.stringify(staff));
}

export async function PUT(request) {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const staff = await request.json();
  await updateStaff(staff);
  return new Response(JSON.stringify(staff));
}

export async function DELETE(request) {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const staff = await request.json();
  console.log(staff);
  await deleteStaff(staff.id);
  return new Response(JSON.stringify(staff));
}
