import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
// import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { route } from 'ziggy-js';
import { useForm } from '@inertiajs/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a new note',
        href: '/note/create',
    },
];

export default function Dashboard() {
        const{data,setData,post,errors} =useForm({name:'',category:'',description:''})
const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
   post(route('note.store'));
}
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a new note" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                   
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
                    <Button type="submit" >Add Note</Button>
                </form>
            </div>
        </AppLayout>
    );
}
