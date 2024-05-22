import Image from 'next/image'
import { TickCircle, CloseCircle, ArrowRight2 } from 'iconsax-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import { Tick, XMark } from '@/assets/icon'

const usersRequest = [
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
	{
		avatar:
			'https://i.pinimg.com/474x/5e/ee/7b/5eee7b1b5e4d981c7fa9f25bb80ca719.jpg',
		name: 'Phạm Hoàng Vinh',
		dayRequest: '28/05/2005',
	},
]

function Join() {
	return (
		<div className='w-full'>
			<h1 className='text-center text-3xl font-bold mb-16'>Yêu cầu tham gia</h1>

			<div className='flex justify-center'>
				<div className='flex flex-col max-w-[50rem] w-full'>
					<div className='flex items-center font-medium text-black/60 py-4 px-5 bg-gray-50 rounded-lg'>
						<p className='xl:w-[21.875rem] sm:w-[19.875rem]'>Họ và tên</p>
						<p className='max-lg:hidden'>Ngày gửi yêu cầu</p>
					</div>
					{usersRequest.map((user, index) => {
						return (
							<div
								key={index}
								className='flex max-sm:gap-y-4 max-sm:justify-between max-sm:flex-wrap items-center py-4 px-5 border-b border-solid border-black/10'
							>
								<div className='flex items-center gap-4 xl:w-[21.875rem] w-[19.875rem] max-sm:flex-1 max-w-full'>
									<Image
										src={user.avatar}
										alt=''
										height={512}
										width={512}
										className='w-12 h-12 rounded-full'
									/>
									<div className='max-lg:self-stretch flex flex-col justify-between'>
										<p className='font-semibold text-base'>{user.name}</p>
										<p className='font-light text-sm lg:hidden'>
											Ngày gửi: {user.dayRequest}
										</p>
									</div>
								</div>

								<p className='font-medium text-gray-700 max-lg:hidden'>
									{user.dayRequest}
								</p>

								<div className='flex max-sm:w-full items-center sm:gap-4 max-sm:gap-2 sm:ml-auto max-sm:flex-wrap max-sm:order-3'>
									<div className='flex justify-center max-sm:flex-1 items-center text-sm gap-2 px-4 py-2 border border-solid border-green-600 text-green-600 hover:bg-green-100/50 transition-all cursor-pointer rounded-xl'>
										<Tick className='w-4 h-4 md:hidden text-green-600' />
										<span className='max-md:hidden max-sm:block text-nowrap'>Đồng ý</span>
									</div>

									<div className='flex justify-center max-sm:flex-1 items-center text-sm gap-2 px-4 py-2 border border-solid border-red-600 text-red-600 hover:bg-red-100/50 transition-all cursor-pointer rounded-xl'>
										<XMark className='w-4 h-4 md:hidden' />
										<span className='max-md:hidden max-sm:block text-nowrap'>Từ chối</span>
									</div>
								</div>

								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<div className='ml-4 p-2 rounded-xl bg-white hover:bg-gray-100/80 transition-all cursor-pointer max-sm:order-1'>
												<ArrowRight2 size={16} />
											</div>
										</TooltipTrigger>
										<TooltipContent>
											<p>Xem thông tin</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Join
