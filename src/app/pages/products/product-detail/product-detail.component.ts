import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  products: any;
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.products = {
      '1': {
        banner: '/images/news/blog/ui-ux-img.png',
        heading: 'ezBiz: Empowering SMEs with a Fully Fledged ERP Solution',
        avatar: '/images/news/articles/avatarone.png',
        author: {
          detailone: 'By ThinkCube',
          detailtwo: 'ThinkCube Products',
        },
        contentone:
          "In today's fast-paced business environment, small and medium enterprises (SMEs) need robust, scalable tools to manage their operations efficiently. ezBiz, developed by ThinkCube, is a comprehensive, cloud-based ERP solution designed specifically to meet the unique needs of SMEs, putting powerful business management capabilities within reach of every entrepreneur.",
        contenttwo:
          'ezBiz is a fully integrated suite of business applications, combining essential modules such as Sales, Purchasing, Inventory, Accounting, Customer Relationship Management (CRM), Jobs, and Point of Sale (POS). This all-in-one platform enables business owners to manage every aspect of their operations, from customer orders and supplier relationships to financial reporting and inventory control, all from a single, user-friendly interface.',
        contentthree:
          'The solution is built for flexibility and accessibility. With ezBiz, business owners and their teams can work from anywhere, at any time, using any device with an internet connection. Multi-location management, customizable user permissions, and automated reporting ensure that businesses can scale smoothly and make data-driven decisions with confidence.',
        quote:
          "ezBiz is more than just software; it's a partner for growth, helping SMEs streamline operations, reduce manual work, and focus on what matters most: building a successful business.",
        smallheading: 'Available Through Leading Banks',
        smallcontent:
          'ezBiz is available for purchase directly from ThinkCube, as well as through strategic partnerships with leading banks such as HNB and NDB, making it accessible to a wide range of SMEs at special or concessionary rates. The platform is designed for easy onboarding, with comprehensive support, training, and user manuals provided.',
        quoteauthor: 'ThinkCube Leadership Team',
        contenfour:
          'With ezBiz, ThinkCube is setting a new standard for SME digital transformation in Sri Lanka and beyond. By equipping businesses with a fully fledged ERP solution, ThinkCube is empowering SMEs to compete, innovate, and thrive in an increasingly digital world.',
        headertwo: "ThinkCube's Commitment to SME Success",
        imagesaas: '/images/news/blog/seo.jpg',
        imageby: 'Image courtesy of ThinkCube',
        contentfive:
          'ThinkCube is dedicated to supporting the growth and resilience of SMEs through innovative, user-centric digital solutions. With ezBiz, we are helping business owners across industries streamline their operations, gain valuable insights, and achieve sustainable growth, one smart decision at a time.',
        websiteUrl: 'https://www.thinkcube.com',
        websiteLabel: 'Visit ezBiz',
      },
      '2': {
        banner: '/images/news/blog/erp.jpeg',
        heading: 'ezBiz Lite: Mobile ERP for Micro and Small Businesses',
        avatar: '/images/news/articles/avatarone.png',
        author: {
          detailone: 'By ThinkCube',
          detailtwo: 'ThinkCube Products',
        },
        contentone:
          'In the era of digital mobility, micro and small businesses need flexible, powerful tools that keep up with their fast-paced environments. ezBiz Lite, developed by ThinkCube, is a fully fledged ERP solution designed specifically for micro and small enterprises, offering all the essential business management features, now optimized for mobile devices.',
        contenttwo:
          "ezBiz Lite empowers business owners to run their operations efficiently, anytime and anywhere. Whether you're on the shop floor, at a supplier meeting, or working remotely, ezBiz Lite puts the power of enterprise resource planning in the palm of your hand. The mobile version includes core modules such as Sales, Purchasing, Inventory, Accounting, and Customer Management.",
        contentthree:
          'The intuitive mobile interface makes it simple to log sales, update inventory, track expenses, and generate reports, all in real time. With cloud-based data storage and synchronization, your business information is always up to date and accessible across devices.',
        quote:
          "ezBiz Lite is more than just an app; it's your business partner on the go, helping micro and small enterprises stay agile, efficient, and competitive in today's mobile-first world.",
        smallheading: 'Easy Onboarding for Every Entrepreneur',
        smallcontent:
          'ezBiz Lite is available for purchase and is designed for easy adoption by entrepreneurs who may not have extensive technical experience. Comprehensive support, user-friendly tutorials, and responsive customer service ensure a smooth onboarding process for all users.',
        quoteauthor: 'ThinkCube Leadership Team',
        contenfour:
          'By bringing a fully fledged ERP solution to mobile devices, ThinkCube is revolutionizing how micro and small businesses manage their operations. ezBiz Lite enables entrepreneurs to focus on growth, innovation, and customer satisfaction, wherever their business takes them.',
        headertwo: "ThinkCube's Commitment to Micro and Small Business Success",
        imagesaas: '/images/news/blog/seo_pic.jpg',
        imageby: 'Image courtesy of ThinkCube',
        contentfive:
          'ThinkCube is dedicated to empowering micro and small businesses with innovative, accessible digital solutions. With ezBiz Lite, we are helping entrepreneurs across Sri Lanka and beyond streamline their operations, make smarter decisions, and achieve sustainable success, all from the convenience of their smartphones.',
        websiteUrl: 'https://www.thinkcube.com',
        websiteLabel: 'Visit ezBiz Lite',
      },
      '3': {
        banner: '/images/news/blog/digitalimg.jpg',
        heading: 'LeapX: Redefining Corporate Training and Education for the Digital Era',
        avatar: '/images/news/articles/avatarone.png',
        author: {
          detailone: 'By ThinkCube',
          detailtwo: 'ThinkCube Products',
        },
        contentone:
          "Imagine a workplace where every employee, new or seasoned, has instant access to learning that feels tailor-made for them. Where training isn't a chore, but a journey of discovery, collaboration, and growth. This isn't a distant dream; it's the reality that ThinkCube's LeapX e-learning platform is bringing to organizations across the globe.",
        contenttwo:
          "As digital transformation reshapes every industry, the need for continuous learning and upskilling has never been more urgent. Organizations are racing to equip their teams with the skills and adaptability required to stay ahead. Enter LeapX: a next-generation e-learning solution that's setting a new standard for corporate training and education.",
        contentthree:
          "At the heart of LeapX is its ability to adapt to any organization, any learning goal, and any workforce. Whether you're onboarding bright new talent, upskilling your current team, or rolling out specialized training, LeapX empowers you to create learning experiences that resonate.",
        quote:
          "LeapX is not just another e-learning tool; it's a catalyst for organizational growth, designed to help teams learn, adapt, and excel together in the digital era.",
        smallheading: 'Customization and Collaboration at the Core',
        smallcontent:
          'Customization is key with LeapX. Organizations can brand their learning environment and tailor content to their unique culture and objectives. Collaborative features like peer-to-peer learning, virtual classrooms, and real-time feedback foster a vibrant culture of knowledge sharing and continuous improvement.',
        quoteauthor: 'ThinkCube Leadership Team',
        contenfour:
          'As the world of work continues to evolve, LeapX is poised to become an essential tool for any organization committed to building a future-ready workforce. By harnessing the power of LeapX, companies can ensure their teams are not just prepared for change but are leading it.',
        headertwo: "ThinkCube's Commitment to Transforming Learning",
        imagesaas: '/images/news/blog/seo.jpg',
        imageby: 'Image courtesy of ThinkCube',
        contentfive:
          "At ThinkCube, we're passionate about helping organizations unlock their full potential through digital innovation. With LeapX, we're reimagining what's possible in corporate training and education, delivering scalable, flexible, and user-centric solutions that empower teams to thrive in the digital age.",
        websiteUrl: 'https://www.thinkcube.com',
        websiteLabel: 'Visit LeapX',
      },
      '4': {
        banner: '/images/news/blog/seo_pic.jpg',
        heading: 'Guru.lk: Revolutionizing Online Learning in Partnership with Dialog Axiata',
        avatar: '/images/news/articles/avatarone.png',
        author: {
          detailone: 'By ThinkCube',
          detailtwo: 'ThinkCube Products',
        },
        contentone:
          "Sri Lanka's educational landscape was transformed in 2013 with the launch of Guru.lk, a pioneering e-learning platform developed in partnership with Dialog Axiata PLC. Designed to make learning accessible and convenient for everyone, Guru.lk has since become a cornerstone of digital education, empowering users to unlock knowledge anytime, anywhere, with just an internet connection.",
        contenttwo:
          "Guru.lk breaks down traditional barriers to education by offering a flexible, user-friendly platform that can be accessed with any internet package. Whether at home, at work, or on the go, learners can log in and access a wide array of courses tailored to their interests and needs.",
        contentthree:
          'One of the standout features of Guru.lk is its effortless registration process. Users can sign up with just a few clicks using their Facebook, Twitter, LinkedIn, or Google accounts, eliminating the need for complex registration forms.',
        quote:
          "Guru.lk is more than just an e-learning platform; it's a gateway to lifelong learning, making education accessible, inclusive, and enjoyable for everyone.",
        smallheading: 'Powered by Dialog Axiata',
        smallcontent:
          "The partnership between Guru.lk and Dialog Axiata PLC has played a crucial role in expanding access to digital education across Sri Lanka. By leveraging Dialog's robust network infrastructure and widespread reach, Guru.lk ensures that users from all corners of the country can benefit from high-quality online learning.",
        quoteauthor: 'ThinkCube Leadership Team',
        contenfour:
          "Since its launch, Guru.lk has empowered thousands of learners to acquire new skills, advance their careers, and pursue their passions. The platform continues to evolve, introducing new courses, interactive features, and community-driven learning experiences to meet the changing needs of today's digital learners.",
        headertwo: "ThinkCube's Commitment to Digital Education",
        imagesaas: '/images/news/blog/business-person.jpg',
        imageby: 'Image courtesy of ThinkCube',
        contentfive:
          'ThinkCube is proud to support initiatives like Guru.lk that drive digital transformation in education. Our expertise in developing innovative online platforms helps organizations like Dialog Axiata PLC deliver accessible, engaging, and impactful learning experiences to users across Sri Lanka.',
        websiteUrl: 'https://www.guru.lk',
        websiteLabel: 'Visit Guru.lk',
      },
      '5': {
        banner: '/images/news/blog/sl_cricket.png',
        heading: "Game On: How Online & On-Demand Ticketing is Transforming Cricket for Sri Lanka's Fans",
        avatar: '/images/news/articles/avatarone.png',
        author: {
          detailone: 'By ThinkCube',
          detailtwo: 'ThinkCube Products',
        },
        contentone:
          "Step into the future of cricket fandom with Sri Lanka Cricket and ThinkCube. Gone are the days of long queues, lost tickets, and last-minute scrambles. Since 2022, Sri Lanka Cricket has been reimagining the matchday experience with a state-of-the-art, end-to-end online ticketing platform, crafted by ThinkCube to put the power of cricket access directly into fans' hands.",
        contenttwo:
          "Imagine: You're on your way to a high-stakes international match. With just a few taps on your phone, you've secured your seat, received your e-ticket, and are ready to walk straight into the stadium, hassle-free. This is the new normal for Sri Lankan cricket fans, thanks to a digital ticketing revolution that's making the game more accessible, secure, and exciting than ever before.",
        contentthree:
          "The ThinkCube platform was built to meet the soaring expectations of modern fans, offering convenience, transparency, and top-tier security at every turn. Whether you're a die-hard local supporter or an international visitor, the system is designed to handle thousands of transactions with ease.",
        quote:
          "This platform is not just about selling tickets—it's about enhancing the fan experience and making cricket more accessible to everyone.",
        smallheading: 'Real-Time Inventory & Dynamic Pricing',
        smallcontent:
          "But the innovation doesn't stop at the gate. The platform delivers real-time inventory updates, dynamic pricing, and powerful analytics, giving Sri Lanka Cricket the insights it needs to optimize every event and respond to fan demand like never before. Multiple payment options and multilingual support ensure every fan enjoys a smooth booking experience.",
        quoteauthor: 'ThinkCube Leadership Team',
        contenfour:
          "The impact is clear: From the Australia Tour to today's ongoing inbound series, ThinkCube's ticketing platform has become the backbone of Sri Lanka Cricket's matchday operations. It's not just about streamlining entries, it's about creating unforgettable experiences, fostering community, and bringing fans closer to the game they love.",
        headertwo: "ThinkCube's Commitment to Digital Innovation in Sports",
        imagesaas: '/images/news/blog/travel-agency.jpg',
        imageby: 'Image courtesy of ThinkCube',
        contentfive:
          "At ThinkCube, we're passionate about pushing the boundaries of what's possible in sports technology. Our ongoing partnership with Sri Lanka Cricket is a testament to our dedication to innovation, reliability, and fan-centric design. By empowering Sri Lanka Cricket with a world-class ticketing platform, we're helping to make cricket more accessible, secure, and enjoyable for fans everywhere.",
        websiteUrl: 'https://tickets.srilankacricket.lk',
        websiteLabel: 'Visit SLC Ticketing',
      },
    };

    this.route.paramMap.subscribe((params) => {
      const productKey = params.get('product');
      if (productKey && this.products[productKey]) {
        this.product = this.products[productKey];
      } else {
        this.product = this.products['1'];
      }
    });
  }

  navigateToProduct(productId: string): void {
    this.router.navigate(['/product-detail', productId]);
  }

  openWebsite(): void {
    if (this.product?.websiteUrl) {
      window.open(this.product.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
