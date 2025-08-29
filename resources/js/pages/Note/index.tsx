import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,useForm, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { route } from 'ziggy-js';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Note',
        href: '/note',
    },
];
interface Notes{
    id:number,
    name:string,
    category:string,
    description:string,
}
 interface PageProps{
    flash:{
        message?:string
    },
    notes: Notes[]
 }
export default function Dashboard() {
const { notes,flash } = (usePage().props as unknown as PageProps);
const {processing,delete:destroy}=useForm();

const handleDelete=(id:number,name:string)=>
    {
        if(confirm(`Do you want to delete the product -${id}.${name}`)){
destroy(route("note.destroy",id));
        }
        
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Note" />
            <div className='m-4 '>
<Link href={route('note.create')}><Button>Create a Note</Button></Link>
            </div>
            <div className="m-4">
                <div>{flash.message && (<Alert variant="default">
  <Megaphone />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    {flash.message}
  </AlertDescription>
</Alert>)}</div>
            </div>
            {notes.length>0 && (
                <div className="m-4"><Table>
  <TableCaption>A list of your recent notes.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-center">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {notes.map((note)=>( <TableRow>
      <TableCell className="font-medium">{note.id}</TableCell>
      <TableCell>{note.name}</TableCell>
      <TableCell>{note.category}</TableCell>
      <TableCell>{note.description}</TableCell>
      <TableCell className="text-center space-x-2">
       <Link href={route('note.edit',note.id)}><Button className="bg-slate-600 hover:bg-slate-700">Edit</Button></Link> 
        <Button disabled={processing} onClick={()=>handleDelete(note.id,note.name)}className="bg-red-500 hover:bg-red-700">Delete</Button></TableCell>
    </TableRow>))}
   
  </TableBody>
</Table></div>

            )}
        </AppLayout>
    );
}
