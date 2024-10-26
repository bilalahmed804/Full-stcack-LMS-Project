import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function layout({children}) {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
    <TabsList className="w-full p-7">
        <Link href={`/admin/dashboard`}>
      <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </Link>
        <Link href={`/admin/course`}>
      <TabsTrigger value="course">Course</TabsTrigger>
      </Link>
      <Link href={`/admin/batches`}>
      <TabsTrigger value="batches">Bateches</TabsTrigger>
      </Link>
      <Link href={`/admin/trainer`}>
      <TabsTrigger value="trainer">Trainer</TabsTrigger>
      </Link>
      <Link href={`/admin/student`}>
      <TabsTrigger value="student">Students</TabsTrigger>
      </Link>
    </TabsList>
    <TabsContent value="dashboard">{children}</TabsContent>
    <TabsContent value="course">{children}</TabsContent>
    <TabsContent value="batches">{children}</TabsContent>
    <TabsContent value="trainer">{children}</TabsContent>
    <TabsContent value="student">{children}</TabsContent>
  </Tabs>
  
  )
}
