// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Welcome',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
<div className="max-w-5xl mx-auto w-1/2 mt-7">
  <h1 className="text-4xl font-bold text-center mb-4">
    Welcome to the noteapp
  </h1>
  <div>
  <h3 className='text-2xl mx-2 text-amber-100 mt-35'>This is a sample</h3>
  <div className="bg-amber-100 rounded-2xl p-5 shadow-lg">
    <h2 className="font-semibold text-xl text-gray-900">Title</h2>

    <span className="inline-block mt-3 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
      Category
    </span>

    <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3">
      Description
    </p>

    <div className="flex justify-end mt-6 space-x-2">
      <button className="text-sm bg-slate-300 hover:bg-slate-400 text-black px-4 py-1.5 rounded-lg">
        Edit
      </button>
      <button className="text-sm bg-red-400 hover:bg-red-600 text-black px-4 py-1.5 rounded-lg">
        Delete
      </button>
    </div>

  </div>
  </div>
</div>


        </AppLayout>
    );
}