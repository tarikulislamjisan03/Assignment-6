import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className='py-16'>
            <div className='max-w-[1200px] mx-auto'>

                {/* Title */}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold mb-3'>Simple, Transparent Pricing</h1>
                    <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-3 gap-6 items-stretch '>

                    {/* Starter */}
                    <div className='border border-gray-200 rounded-2xl p-8 flex-1'>
                        <h1 className='text-xl font-bold'>Starter</h1>
                        <p className='text-gray-500 text-sm mb-4'>Perfect for getting started</p>
                        <div className='md:text-4xl text-2xl font-bold'>
                            <span className='text-4xl font-bold'>$0</span>
                            <span className='text-gray-500 text-sm'>/Month</span>
                        </div>
                        <ul className='space-y-2 mb-8'>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Access to 10 free tools</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Basic templates</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Community support</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> 1 project per month</li>
                        </ul>
                        <button className='w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700'>
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro */}
                    <div className='bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl p-2 pt-5 md:p-8  relative text-white'>
                        <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-700 text-xs font-bold px-4 py-1 rounded-full'>Most Popular</span>
                        <h1 className='text-xl font-bold text-center md:text-left pt-5'>Pro</h1>
                        <p className='text-purple-200 text-sm mb-4 md:text-left text-center'>Best for professionals</p>
                        <div className='mb-4'>
                            <span className='md:text-4xl text-2xl font-bold'>$29</span>
                            <span className='text-purple-200 text-sm'>/Month</span>
                        </div>
                        <ul className='space-y-2 mb-8'>
                            <li className='flex items-center gap-2 text-sm text-purple-100'><Check size={16} className='text-white' /> Access to all premium tools</li>
                            <li className='flex items-center gap-2 text-sm text-purple-100'><Check size={16} className='text-white' /> Unlimited templates</li>
                            <li className='flex items-center gap-2 text-sm text-purple-100'><Check size={16} className='text-white' /> Priority support</li>
                            <li className='flex items-center gap-2 text-sm text-purple-100'><Check size={16} className='text-white' /> Unlimited projects</li>
                            <li className='flex items-center gap-2 text-sm text-purple-100'><Check size={16} className='text-white' /> Cloud sync</li>
                            <li className='flex items-center gap-2 text-sm text-purple-100'><Check size={16} className='text-white' /> Advanced analytics</li>
                        </ul>
                        <button className='w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-gray-100'>
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className='border border-gray-200 rounded-2xl p-8'>
                        <h1 className='text-xl font-bold'>Enterprise</h1>
                        <p className='text-gray-500 text-sm mb-4'>For teams and businesses</p>
                        <div className='mb-4 text-center'>
                            <span className='md:text-4xl text-2xl font-bold'>$99</span>
                            <span className='text-gray-500 text-sm'>/Month</span>
                        </div>
                        <ul className='space-y-2 mb-8'>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Everything in Pro</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Team collaboration</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Custom integrations</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Dedicated support</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> SLA guarantee</li>
                            <li className='flex items-center gap-2 text-sm text-gray-600'><Check size={16} className='text-purple-600' /> Custom branding</li>
                        </ul>
                        <button className='w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700'>
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;