"use client";

import { useQuery } from "@tanstack/react-query";
import { columns } from "@/components/data-table/columns";
import { UsersIcon } from "lucide-react";
import {getUsers} from "@/lib/api"
import { DataTable } from "@/components/data-table/data-table";


export default function Home() {

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error loading users{error.toString()}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center gap-4 mb-8">
        <UsersIcon className="h-8 w-8" />
        <h1 className="text-3xl font-bold">User Management</h1>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
}