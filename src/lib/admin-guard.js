import { supabase } from "./supabase.js";

export async function getCurrentProfile() {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session) {
    return {
      ok: false,
      reason: "no-session",
      session: null,
      profile: null,
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", session.user.id)
    .maybeSingle();

  if (profileError || !profile) {
    return {
      ok: false,
      reason: "no-profile",
      session,
      profile: null,
    };
  }

  return {
    ok: true,
    reason: null,
    session,
    profile,
  };
}

export async function requireAdmin() {
  const result = await getCurrentProfile();

  if (!result.ok) {
    window.location.href = "/login";
    return null;
  }

  const role = result.profile.role;

  if (role !== "admin" && role !== "superadmin") {
    window.location.href = "/403";
    return null;
  }

  return result;
}

export async function requireSuperadmin() {
  const result = await getCurrentProfile();

  if (!result.ok) {
    window.location.href = "/login";
    return null;
  }

  const role = result.profile.role;

  if (role !== "superadmin") {
    window.location.href = "/403";
    return null;
  }

  return result;
}