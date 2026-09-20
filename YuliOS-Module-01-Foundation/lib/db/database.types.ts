// Placeholder generated-shape types for Module 1.
// Replace with: supabase gen types typescript --linked > lib/db/database.types.ts
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      hotels: {
        Row: { id: string; name: string; slug: string; timezone: string; active: boolean; created_at: string };
        Insert: { id?: string; name: string; slug: string; timezone?: string; active?: boolean; created_at?: string };
        Update: { name?: string; slug?: string; timezone?: string; active?: boolean };
        Relationships: [];
      };
      profiles: {
        Row: { id: string; hotel_id: string; full_name: string; role: Database["public"]["Enums"]["app_role"]; active: boolean; created_at: string; updated_at: string };
        Insert: { id: string; hotel_id: string; full_name: string; role: Database["public"]["Enums"]["app_role"]; active?: boolean; created_at?: string; updated_at?: string };
        Update: { hotel_id?: string; full_name?: string; role?: Database["public"]["Enums"]["app_role"]; active?: boolean; updated_at?: string };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      current_hotel_id: { Args: Record<PropertyKey, never>; Returns: string };
      current_role: { Args: Record<PropertyKey, never>; Returns: Database["public"]["Enums"]["app_role"] };
    };
    Enums: {
      app_role: "owner" | "manager" | "reception" | "housekeeping" | "restaurant" | "maintenance" | "read_only";
    };
    CompositeTypes: Record<string, never>;
  };
};
