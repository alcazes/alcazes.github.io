var config = {
    education: [{
            title: "BSc (Hons) Information Systems",
            location: '<i class="fas fa-university"></i> &nbsp; Heriot Watt University &nbsp;&#183;&nbsp; <i class="fas fa-map-marker-alt"></i> &nbsp; Edinburgh',
            start: {
                date: "2008",
                label: "2008"
            },
            end: {
                date: "2010",
                label: "2010"
            },
            description: ['<span class="subtitle">Prizes:</span><br>In third year, my group won a prize for our third year project. The project consisted of developing a JAVA software and a website for a fitness company. It also involved producing the necessary documentation.',
                '<span class="subtitle">Final year projects:</span><br>Development of a flash game using Flex (Group project)<br> 3D animation using 3ds MAX (Individual).<br>Design of the application <i>Green Planet</i> - which allows people to choose the best suited and sustainable method of transport for their journey. (Group project)',
                '<span class="subtitle">Dissertation:</span><br>The design and development of software for the <i>Secours Catholique de Clermont Ferrand in France</i>. (Management of the customer&#39;s details, management of the users, statistics and server based application). The application was developed in JAVA.'
            ]
        },
        {
            title: "DUETI (Dipl&#244;me Universitaire d&#39;enseignement Technologique International) in Computer Science",
            location: '<i class="fas fa-university"></i> &nbsp; IUT (University of Technology) &nbsp;&#183;&nbsp; <i class="fas fa-map-marker-alt"></i> &nbsp; Clermont-Ferrand, France',
            start: {
                date: "2008",
                label: "2008"
            },
            end: {
                date: "2009",
                label: "2009"
            },
            description: []
        },
        {
            title: "DUT (Technological Diploma) in Computer Science equivalent to Higher National Diploma",
            location: '<i class="fas fa-university"></i> &nbsp; IUT (University of Technology) &nbsp;&#183;&nbsp; <i class="fas fa-map-marker-alt"></i> &nbsp; Clermont-Ferrand, France',
            start: {
                date: "2006",
                label: "2006"
            },
            end: {
                date: "2008",
                label: "2008"
            },
            description: []
        },
        {
            title: "French Baccalaureate with distinction equivalent to A level in Science.",
            location: '<i class="fas fa-university"></i> &nbsp; Lyc&#233;e polyvalent Gerbert &nbsp;&#183;&nbsp; <i class="fas fa-map-marker-alt"></i> &nbsp; Aurillac, France',
            start: {
                date: "2006-06",
                label: "Jun 2006"
            },
            description: []
        }
    ],
    certifications: [
        {
            title: "Adobe Certified Expert: Adobe Dynamic Tag Management (DTM)",
            location: "Adobe",
            start: {
                date: "2014-12",
                label: "Dec 2014"
            },
            current: false,
            description: []
        },
        {
            title: "Adobe Analytics Processing Rules",
            location: "Adobe",
            start: {
                date: "2014-01",
                label: "Jan 2014"
            },
            current: false,
            description: []
        },
        {
            title: "Adobe Certified Expert: Implementation (SiteCatalyst) (Adobe)",
            location: "Adobe",
            start: {
                date: "2011-12",
                label: "Dec 2011"
            },
            current: false,
            description: []
        },
        {
            title: "Adobe Certified Expert, Architect: Insight (Adobe)",
            location: "Adobe",
            start: {
                date: "2011-05",
                label: "May 2011"
            },
            current: false,
            description: []
        },
        {
            title: "Adobe Certified Expert: Analyst: Insight (Adobe)",
            location: "Adobe",
            start: {
                date: "2011-04",
                label: "Apr 2011"
            },
            current: false,
            description: []
        }
    ],
    workExperience: [
        {
            title: "Analytics Manager",
            location: "RBS",
            start: {
                date: "2018-07",
                label: "Jul 2018"
            },
            end: {
                date: "2021",
                label: "Present"
            },
            length: 'Present',
            current: false,
            description: [`<p><u>Migration from Adobe DTM to Adobe Launch:</u><br>Leading the project to migrate tagging to Adobe Launch. As part
            of migration each container was audited and refactored to be compliant with coding and tagging standards.</p>
        <p><u>Generic Data Layer:</u><br> By reviewing the existing data collected on all of our platforms, I have defined a
            generic data
            layer to use across all of our tagging implementation. I used JSON schema definition to document the different
            versions of the generic data layer. This allowed to align and streamline our tagging implementations across all of
            our platforms. I worked with the different development teams to help them implement the generic data layer.</p>
        <p><u>Coding, tagging and release standards:</u><br> I have defined coding, tagging and release standards so our team
            can deliver
            high quality tagging builds. To support this a release tool and notification tool were created to automate the
            process. The standards allowed us to facilitate the peer review process as well as increasing trust with our
            stakeholders.</p>
        <p><u>ConfiSite:</u><br> I created a framework to deliver dynamic website page inside Confluence. Using the Confluence
            HTML macro,
            I was able to inject an iframe that loads web pages in full view. I used ConfiForm and ConfiForm API to store and
            retrieved the data. Bulma CSS library and vanilla JavaScript allowed to display the content of the pages. I created
            a JavaScript library to handle interactions on the page and store and retrieve the data. As part of this library, I
            also created a logic to generate page content from JSON object like forms.</p>
        <p><u>Request form, Request hub, Admin Dashboard and Request portal:</u><br> ConfiSite framework was used to create a
            platform to
            raise and manage requests for our department. In order to manage the request an admin portal was created to list all
            existing requests, with features to assign them to specific team members. The request portal was designed to keep
            track of the request with features like history of request (when it was created, assigned, approved/rejected,
            commented), detail of request, status panel of request that changes over time, comment section, integration with
            JIRA API to create and display JIRA ticket. An admin feature was also developed that allowed some features to be
            visible by admins only.</p>
        <p><u>Other tools developed using ConfiSite framework:</u><br></p>
        <ul>
            <li>Tracking code generator for internal use to generate both web and AppsFlyer tracking codes/URLs. A form and
                summary table were created.</li>
            <li>Test name generator for Adobe Target</li>
            <li>User management: allows to add users to Adobe Experience Cloud. Used Adobe Runtime and Adobe UMAPI.
                Email library: A JavaScript email library was created from scratch to generate email content from a Json object.
                It
                is possible to configure a template using json and specify blueprint slots. These slots can then be defined at a
                later stage to build dynamic content.</li>
        </ul>
        <p><u>Windows team incoming connector:</u><br> As part of the request portal project, it was required to send
            notification to
            windows team. Using Adobe runtime, I have created an API endpoint to send the POST request to windows team with the
            card payload. Request portal and ConfiSite project were updated to call this API endpoint and build the card payload
            dynamically based on the request lifecycle.</p>
        <p><u>Adobe Launch Auto Tagging Framework:</u><br> Using the Generic Data Layer V2 data layer schema definition, a set
            of Adobe
            Launch Private extensions were created to support auto-tagging. The auto-tagging framework will queue and process
            incoming events sent from the platform in the right order. </p>
        <p><u>Adobe Launch Auto Tagging Framework:</u><br> Using the Generic Data Layer V2 data layer schema definition, a set
            of Adobe
            Launch Private extensions were created to support auto-tagging. The auto-tagging framework will queue and process
            incoming events sent from the platform in the right order. </p>
        <p><u>Adobe Launch private extension developed:</u><br></p>
        <ul>
            <li>Core extension: contains several helpers shared and used in other private extensions</li>
            <li>Auto tagging extension: contains all the logic and configuration to deploy auto tagging.</li>
            <li>OneTrust extension: support cookie preference and used to make sure correct tags were fired. Linked to auto
                tagging extension to queue marketing and analytics tags if incorrect cookie selection was present and would be
                fired
                when cookie selection changed.</li>
            <li>Marketing hub extension: contains actions to deploy common marketing pixels like Gtag floodlight, Facebook,
                Pinterest, impact radius, Clicktale/ContentSquare, Twitter...</li>
            <li>Live Person extension: delivers live person chat</li>
        </ul>`]
        },
        {
            title: "Computer Scientist, Software Development",
            location: "Adobe",
            start: {
                date: "2016-11",
                label: "Nov 2016"
            },
            end: {
                date: "2018-07",
                label: "Jul 2018"
            },
            length: '1 yr 9 mos',
            current: false,
            description: ['Main role was to work as QE. This involved overseeing tests related to the API layer that sits in between Adobe Websites and the upstream services. I worked mainly with JAVA but I also used a variety of other languages to automate the testing phases. Entrusted to integrate Adobe Analytics in the testing lifecycle as part of a monitoring project. A shared analytics library was created to be used by Jenkins pipeline. A Jenkins Plugin was also created to do the same.']
        },
        {
            title: "Lead Technical Support Engineer",
            location: "Adobe",
            start: {
                date: "2015-11",
                label: "Nov 2015"
            },
            end: {
                date: "2016-11",
                label: "Nov 2016"
            },
            length: '1 yr 1 mo',
            current: false,
            description: ['Provided high quality technical support services for Adobe’s most strategic digital marketing enterprise customers. My core responsibilities included working across our global teams to drive effective problem and case resolution, positioning customers for success, collaborating to resolve highly complex technical challenges and resolving escalations. In addition, with my expertise, I provided mentoring and coaching to other team members, helping to collectively raise everyone’s game.']
        },
        {
            title: "Secondment to Adobe Integration Center of Excellence (ICE team)",
            location: "Adobe",
            start: {
                date: "2015-03",
                label: "Mar 2015"
            },
            end: {
                date: "2015-11",
                label: "Nov 2015"
            },
            length: '1 yr 9 mos',
            current: false,
            description: ['The Adobe Marketing Cloud includes several products that all rely on core services. Using an identical Visitor ID across all solution it is possible to use data from one solution into another. My role was to make sure the integration process between all these solutions was done successfully and efficiently. When there was an issue I needed to identify the root cause and provide a solution both at the implementation level as well as fixing the setting on the backend tool. I am an expert with Adobe Dynamic Tag Manager (DTM), which is Adobe’s tag management system (TMS). This tool helps to do fast, efficient and effortless integrations between all Adobe Marketing Cloud Products.']
        },
        {
            title: "Senior Technical Support Engineer",
            location: "Adobe",
            start: {
                date: "2014-07",
                label: "Jul 2014"
            },
            end: {
                date: "2015-11",
                label: "Nov 2015"
            },
            length: '1 yr 5 mos',
            current: false,
            description: ['Identify the root cause of the issues experienced by high value customers (RBS, Vodafone, General Motors, Dell) and provide a solution to the problem at hand in the shortest amount of time. Involved in all high visibility escalations to advise and provide solutions to issues faced by our customers. As the implementation (web, mobile, APIs …) subject matter expert I was entrusted with the task to mentor the immediate and extended team (India) for the existing and new implementation of Adobe Marketing Cloud products.Identify the root cause of the issues experienced by high value customers (RBS, Vodafone, General Motors, Dell) and provide a solution to the problem at hand in the shortest amount of time. Involved in all high visibility escalations to advise and provide solutions to issues faced by our customers. As the implementation (web, mobile, APIs …) subject matter expert I was entrusted with the task to mentor the immediate and extended team (India) for the existing and new implementation of Adobe Marketing Cloud products.']
        },
        {
            title: "Web Analytics Consultant ",
            location: "Yard Digital",
            start: {
                date: "2013-11",
                label: "Nov 2013"
            },
            end: {
                date: "2014-06",
                label: "Jun 2014"
            },
            length: '8 mos',
            current: false,
            description: ['Implementation and audit of Adobe Analytics.']
        },
        {
            title: "Technical Support Engineer",
            location: "Adobe",
            start: {
                date: "2012-06",
                label: "Nov 2013"
            },
            end: {
                date: "2013-11",
                label: "Nov 2013"
            },
            length: '1 yr 6 mos',
            current: false,
            description: ['Support of Adobe Analytics and Adobe Survey.']
        },
        {
            title: "Adobe Technical Support",
            location: "Adobe",
            start: {
                date: "2010-08",
                label: "Aug 2010"
            },
            end: {
                date: "2012-06",
                label: "Jun 2012"
            },
            length: '1 yr 11 mos',
            current: false,
            description: ['Support of Adobe Analytics and Adobe Survey.']
        }
    ],
    skills: [
        {
            category: "Tagging",
            list: [
                {
                    name: "Adobe DTM",
                    mastery: "100"
                },
                {
                    name: "Adobe Launch",
                    mastery: "100"
                },
                {
                    name: "Adobe Launch Private Extension",
                    mastery: "100"
                },
                {
                    name: "Adobe Legacy Tag Manager 1 and 2",
                    mastery: "75"
                },
                {
                    name: "BrighTag",
                    mastery: "45"
                },
                {
                    name: "Implementation Adobe Products",
                    mastery: "100"
                },
                {
                    name: "Implementation Marketing Pixels",
                    mastery: "100"
                }
            ]
        },
        {
            category: "Adobe",
            list: [
                {
                    name: "Adobe Experience Cloud",
                    mastery: "100"
                },
                {
                    name: "Adobe Analytics",
                    mastery: "100"
                },
                {
                    name: "Adobe APIs",
                    mastery: "100"
                },
                {
                    name: "Adobe Runtime",
                    mastery: "75"
                }
            ]
        },
        {
            category: "Adobe Analytics",
            list: [
                {
                    name: "Web Analytics",
                    mastery: "100"
                },
                {
                    name: "Mobile Analytics",
                    mastery: "100"
                },
                {
                    name: "Server Side Analytics(API)",
                    mastery: "100"
                }
            ]
        },
        {
            category: "Programming",
            list: [
                {
                    name: "Node.js",
                    mastery: "65"
                },
                {
                    name: "HTML",
                    mastery: "100"
                },
                {
                    name: "JavaScript",
                    mastery: "90"
                },
                {
                    name: "CSS",
                    mastery: "90"
                },
                {
                    name: "JQuery",
                    mastery: "50"
                },
                {
                    name: "SQL",
                    mastery: "35"
                },
                {
                    name: "Regex",
                    mastery: "100"
                },
                {
                    name: "Ruby",
                    mastery: "25"
                },
                {
                    name: "Android",
                    mastery: "25"
                },
                {
                    name: "IOS",
                    mastery: "25"
                },
                {
                    name: "JAVA",
                    mastery: "45"
                }
            ]
        },
        {
            category: "General",
            list: [
                {
                    name: "Team Mentoring",
                    mastery: "100"
                },
                {
                    name: "Problem Solving",
                    mastery: "100"
                },
                {
                    name: "Confluence",
                    mastery: "100"
                },
                {
                    name: "JIRA",
                    mastery: "100"
                },
                {
                    name: "ConfiForm",
                    mastery: "95"
                }
            ]
        },
    ]
}

function createEducation() {
    var htmlContent = '<h2 class="title has-text-centered box-title">Education</h2>';
    htmlContent += createTimeLine(config.education);
    document.querySelector('#education').innerHTML = htmlContent;
}

function createWorkExperience() {
    var htmlContent = '<h2 class="title has-text-centered box-title">Work Experience</h2>';
    htmlContent += createTimeLine(config.workExperience);
    document.querySelector('#work-experience').innerHTML = htmlContent;
}

function createCertification() {
    var htmlContent = '<h2 class="title has-text-centered box-title">Certifications</h2>';
    htmlContent += createTimeLine(config.certifications);
    document.querySelector('#certification').innerHTML = htmlContent;
}

function createTimeLine(content) {
    var htmlContent = '';
    for (var i = 0; i < content.length; i++) {
        var item = content[i];
        htmlContent += '<div class="list-item">';
        htmlContent += '<h3 class="is-marginless">' + item.title + '</h3>'; //title
        htmlContent += '<div class="level">' //start level
        htmlContent += '<span class="level-left">' + item.location + '</span>' //location
        htmlContent += '<p class="level-right"><small class="is-uppercase has-text-weight-bold has-text-grey">';
        htmlContent += '<time datetime="' + item.start.date + '">' + item.start.label + '</time>'; // Start date
        if (item.end) {
            htmlContent += '&nbsp;&ndash;&nbsp; <time datetime="' + item.end.date + '">' + item.end.label + ' </time>' + (item.length ? '&nbsp;&#183;&nbsp; ' + item.length : '');
        }
        //End date
        htmlContent += '</small></p></div>'; //end level

        //Description
        item.description.forEach(function (descriptionText) {
            htmlContent += '<p>' + descriptionText + '</p>'
        });
        htmlContent += '</div>'
    }

    return htmlContent;
}

function createSkills() {
    var htmlContent = '<h2 class="title">Skills</h2>';
    var data = config.skills;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        htmlContent += '<h3>' + item.category + '</h3>';
        for (var j = 0; j < item.list.length; j++) {
            var skill = item.list[j];
            console.log(skill)
            htmlContent += '<h4 class="has-text-grey">' + skill.name + '</h4>';
            htmlContent += '<progress class="progress is-info" value="' + skill.mastery + '" max="100">' + skill.mastery + '%</progress>';
        }
    }
    document.querySelector('#skills').innerHTML = htmlContent;

}

window.addEventListener('load', function () {
    createWorkExperience();
    createEducation();
    createCertification();
    createSkills();
});