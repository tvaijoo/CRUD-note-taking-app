import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
// import { dashboard } from '@/routes';
// import { type BreadcrumbItem } from '@/types';
import { Head} from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { route } from 'ziggy-js';
import { useForm } from '@inertiajs/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';

interface Note{
    id:number,
    name:string,
    category:string,
    description:string,
}
interface Props{
    note: Note
}
export default function Edit({note}:Props) {
        const{data,setData,put,processing,errors} =useForm({name:note.name,category:note.category,description:note.description})
const handleUpdate = (e:React.FormEvent)=>{
    e.preventDefault();
   put(route('note.update', note.id));
}
    return (
        <AppLayout breadcrumbs={[{title: 'Edit a note',href:`/note/${note.id}`}]}>
            <Head title="Update the note" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleUpdate} className='space-y-4'>
                   
{Object.keys(errors).length > 0 && (
    <Alert variant="destructive">
        <CircleAlert className="h-4 w-4"/>
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
           <ul>
            {Object.entries(errors).map(([key,message])=>(<li key={key}>{message as string}</li>))}
            </ul>
        </AlertDescription>
    </Alert>
)}
                    <div className='gap-1.5'>
                        <Label htmlFor='note title'>Title</Label>
                   <Input placeholder="Note title" value={data.name} onChange={(e) =>setData('name',e.target.value)}></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor='note category'>Category</Label>
                   <Input placeholder="Note category" value={data.category} onChange={(e) =>setData('category',e.target.value)}></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor='note content'>Content</Label>
                   <Textarea placeholder='Description' value={data.description} onChange={(e) =>setData('description',e.target.value)} />
                    </div>
                    <Button disabled={processing}type="submit" >Update Note</Button>
                </form>
            </div>
        </AppLayout>
    );
}
