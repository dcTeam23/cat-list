// @ts-nocheck

export default function EditProfile() {
    return (

        <div class="min-h-screen bg-gray-100 flex items-center justify-center">
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 class="text-2xl font-bold text-gray-900 mb-6">Edit profile</h1>
                <form>
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Name" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <div class="mt-1 relative">
                            <input type="password" id="password" class="block w-full rounded-md border-gray-300 shadow-sm pr-10" placeholder="••••••••" />
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.86 5 12 5m0 14c-4.14 0-8.268-2.943-9.542-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="bg-lime-500 text-white px-4 py-2 rounded w-24 font-medium">Save</button>
                    <h2 class="font-bold text-slate-500 mb-6 mt-6">Change Password</h2>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Password" />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
                        <div class="mt-1 relative">
                            <input type="password" id="password" class="block w-full rounded-md border-gray-300 shadow-sm pr-10" placeholder="••••••••" />
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.86 5 12 5m0 14c-4.14 0-8.268-2.943-9.542-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="bg-lime-500 text-white px-4 py-2 rounded w-24 font-medium">Save</button>
                </form>
            </div>
        </div>


    )
}