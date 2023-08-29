import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Linking} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import {generalImage, icons} from '../../../assets/images';
import {vh} from '../../../utils/dimensions';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import {colors} from '../../../utils/appTheme';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import ScrollWrapper from '../../../component/ScrollWrapper';
// import {jobDetails, shifts} from '../../../utils/tempData';
import {AirbnbRating} from 'react-native-ratings';
import CustomButton from '../../../component/Buttons/CustomButton';
import {reviews} from '../../../utils/tempData';
import ReviewItem from '../../../component/ReviewItem';
import ShiftItem from '../../../component/ShiftItem';
import ConfirmationModal from '../../../component/ModalMessages/ConfirmationModal';
import {useDispatch} from 'react-redux';
import {getJobsDetails,ApplyFOrJob} from '../../../redux/UserSlice';
import {useEffect} from 'react';

const VacancyJobDetails = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {id} = route?.params;
  const [selectedTab, setSelectedTab] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [Shiftid, setId] = useState(null);

  // var myHeaders = new Headers();
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   'Authorization',
  //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWljaGVhbEB5b3BtYWlsLmNvbSIsImp0aSI6IjFlYTdjMmIwLWRkNzAtNDIwNS1hZjJhLTY3ZjlkYjdjODNhZiIsIlVzZXJJbmZvIjoie1wiRnVsbE5hbWVcIjpcIk1pY2hlYWwgQ2xhcmtcIixcIkZpcnN0TmFtZVwiOlwiTWljaGVhbFwiLFwiTGFzdE5hbWVcIjpcIkNsYXJrXCIsXCJVc2VybmFtZVwiOlwibWljaGVhbEB5b3BtYWlsLmNvbVwiLFwiUGFzc3dvcmRcIjpcIkRldkAxMjNcIixcIkltYWdlUGF0aFwiOm51bGwsXCJFbWFpbEFkZHJlc3NcIjpcIm1pY2hlYWxAeW9wbWFpbC5jb21cIixcIklzQWN0aXZlXCI6dHJ1ZX0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJFbXBsb3llZSIsImV4cCI6MTY5MzM1ODE5MSwiaXNzIjoiaHR0cHM6Ly9hbnlzaGlmdC5jb20iLCJhdWQiOiJodHRwczovL2FueXNoaWZ0LmNvbSJ9.M870aT_DXLnw_hJytLFo4BAGDRUy8gP0nGI_AgcteyI',
  // );
  // myHeaders.append(
  //   'Cookie',
  //   '.AspNetCore.Identity.Application=CfDJ8BfStcnSFtVGpnOObcEPkMwavRpzFi_7yxl0eV1nIn6cLpKBry9ZKcXAhgZ4R-wzo1jzkRvCYihuy1eP5cmrYMY6kbbslt3W2B3HS5RVqaJx_Fde-bLVOftIDU3EJKyw_B0f83Hak-OULhprt8Wo7VbGixqSkesRQg_LOxuC8th-RFi955qva8wG3jEi0bBdQkB7ILmIdCB0g07toVZEeSw9KwPUlhZYK1i-d_mdDGa4_rhPhPhooOY4-boWdNI7S9N2eadCDBqI4LFkFlJLHqDt8lWLq-xMPeBJ3wKweGZP4FHOK5bia1JHnI1hhIdB867i662axxvIiERDqWJ8ZEptG_mf5WKdWBBYY1kVa9hfO5ZUysMUQTE2cESzrnD0SPy1MKI63bk_df10Pu2OLCRJ0_rdcLle_uUY_Gec02GTDWnDGiS3vfL-vdiq-yionmgsTGft5K-Wo4jrgCRYU5FRL0Uw-f08DK0NAJi7DAPR1wb6isFFgjAIV0Pt5D9PzceXyHp8FID8MAeznTqG_KBxrN0Jn8C55cZQ0stnUBzCFHUPw4fFtGnManjqVoWMpmG7aIwA18blrkSykIGI1MOlSVF1xuiasTf0JIAFVYP5oM46ey5BrRhz28rri0ZY6Q3rcb0if7rOWCIYJBbg9LkVaYxqay5ocEnuxPdtmlPcHj4b30_swYf-EJ4lMTxs20BnEnyDM2GXOZ_VQoMUOWMhtBMkwTAneuOGRhhq2-MggPRqHU2Pq90CwOFTLFsRKHrlpbSAoHzcha46IrboiKGLRYIfTsEeJt1y2PbsQHMjj1qfLlRalIaoZUIK1YoTImi4uEnubg9LO6dI2AwIcOUMifL0j23cMZNnf6WlCHwQ',
  // );

  // var raw = '';

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow',
  // };

  const getData = async () => {
    // const response = await fetch(
    //   'https://portaldemo-001-site19.ctempurl.com/api/mobileapp/Jobs/6',
    //   requestOptions,
    // )
    //   .then(response => console.log('Response =============>', response.json()))
    //   .then(result => console.log('resresult', result))
    //   .catch(error => console.log('error', error));
    // console.log('response ===========>', response);
    try {
      const response = await getJobsDetails(id);
      // console.log('Response from GetJobsDetails ========>', response);
      setJobDetail(response?.data?.job);
    } catch (err) {
      console.log('Error from getJobsDetail ==>', err);
      // showMessage(err)
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleTabChange = index => {
    setSelectedTab(index);
  };
  const hanldeAppliedForJob = async () => {
    const data = {jobShiftId: Shiftid};
    const response = await ApplyFOrJob(data);
    console.log('Response from ApplyFOrJob ==>', response);
  };
  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };

  const renderFavIcon = () => {
    if (isFavourite) {
      return icons.heartFilled;
    } else {
      return icons.heartNotFilled;
    }
  };

  const handleFav = () => {
    setIsFavourite(!isFavourite);
  };

  const renderProfile = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.profileImageViewStyle}>
          <Image style={styles.profileImageStyle} source={icons.amazon} />
          <View style={styles.statusMainContainerStyle}>
            <TouchableOpacity onPress={handleFav} style={styles.heartViewStyle}>
              <Image
                source={renderFavIcon()}
                style={styles.onlineIconStyle(isFavourite)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <QanelasBold style={styles.titleTextStyle}>
          {jobDetail?.title}
        </QanelasBold>
        <View style={styles.locationViewStyle}>
          <Image source={icons.location} style={styles.locationIconStyle} />

          <QanelasMedium style={styles.locationTextStyle}>
            {jobDetail?.location}
          </QanelasMedium>
        </View>

        <QanelasBold style={styles.daysTextStyle}>
          ${jobDetail?.number}/6days
        </QanelasBold>
        <QanelasBold style={styles.daysAgoTextStyle}>
          {jobDetail?.postedOn}
        </QanelasBold>
      </View>
    );
  };

  const renderTitles = () => {
    return (
      <View style={styles.mainTitlesViewStyle}>
        <TouchableOpacity
          onPress={() => handleTabChange(0)}
          style={[
            styles.tabTitleViewStyle,
            {
              borderBottomWidth: selectedTab === 0 ? 0.2 * vh : 0,
              borderBottomColor: selectedTab === 0 ? colors.black : colors.grey,
            },
          ]}>
          <QanelasSemiBold
            style={[
              styles.tabTitleTextStyle,
              {
                color: selectedTab === 0 ? colors.black : colors.grey,
              },
            ]}>
            Job
          </QanelasSemiBold>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabChange(1)}
          style={[
            styles.tabTitleViewStyle,
            {
              borderBottomWidth: selectedTab === 1 ? 0.2 * vh : 0,
              borderBottomColor: selectedTab === 1 ? colors.black : colors.grey,
            },
          ]}>
          <QanelasSemiBold
            style={[
              styles.tabTitleTextStyle,
              {
                color: selectedTab === 1 ? colors.black : colors.grey,
              },
            ]}>
            Customer
          </QanelasSemiBold>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabChange(2)}
          style={[
            styles.tabTitleViewStyle,
            {
              borderBottomWidth: selectedTab === 2 ? 0.2 * vh : 0,
              borderBottomColor: selectedTab === 2 ? colors.black : colors.grey,
            },
          ]}>
          <QanelasSemiBold
            style={[
              styles.tabTitleTextStyle,
              {
                color: selectedTab === 2 ? colors.black : colors.grey,
              },
            ]}>
            Shifts{' '}
          </QanelasSemiBold>
        </TouchableOpacity>
      </View>
    );
  };
  console.log('jobDetail?.policyUrl ===>', jobDetail?.policyUrl);
  const renderContent = () => {
    if (selectedTab == 0) {
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Job Description
          </QanelasSemiBold>

          <QanelasRegular style={styles.contentDescriptionStyle}>
            {jobDetail?.description}
          </QanelasRegular>

          {jobDetails?.map((item, index) => (
            <View style={styles.jobPointsViewStyle}>
              <View style={styles.bulletViewStyle} />
              <View style={styles.bulletTextViewStyle}>
                <QanelasRegular style={styles.descriptionTextStyle}>
                  {item?.description}
                </QanelasRegular>
              </View>
            </View>
          ))}

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Address
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                {jobDetail?.address}
              </QanelasMedium>
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                ID Card Front
              </QanelasSemiBold>

              <Image
                source={generalImage.horizontalMap}
                style={styles.mapImageStyle}
              />
            </View>
          </View>
        </View>
      );
    }
    if (selectedTab == 1) {
      return (
        <View style={styles.customerContentContainerStyle}>
          <QanelasBold style={styles.titleTextStyle}>
            {jobDetail?.company?.name}
          </QanelasBold>
          <AirbnbRating
            isDisabled={true}
            count={5}
            defaultRating={
              jobDetail?.company?.starReviews?.length
                ? jobDetail?.company?.starReviews?.length
                : 1
            }
            size={3 * vh}
            showRating={false}
          />
          <QanelasRegular style={styles.customerContentDescriptionStyle}>
            {jobDetail?.company?.address}
          </QanelasRegular>
          <CustomButton
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            text="Visit Website"
            onPress={() => Linking.openURL(jobDetail?.policyUrl)}
          />

          <View style={styles.breakerViewStyle} />

          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Candidate Reviews
          </QanelasSemiBold>

          {jobDetail?.candidateReviews?.map((item, index) => (
            <ReviewItem item={item} />
          ))}
        </View>
      );
    }

    if (selectedTab == 2) {
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Shifts
          </QanelasSemiBold>

          {jobDetail?.shifts?.map((item, index) => (
            <ShiftItem
              item={item}
              selectable={true}
              Shiftid={Shiftid}
              setId={setId}
            />
          ))}
        </View>
      );
    }
  };

  const renderShowInterest = () => {
    return (
      <TouchableOpacity
        onPress={onHandleCancelReasonModal}
        style={styles.showInterestButtonStyle}>
        <QanelasMedium style={styles.textButtonStyle}>
          Show Interest
        </QanelasMedium>

        <Image style={styles.heartIconStyle} source={icons.heartFilled} />
      </TouchableOpacity>
    );
  };

  return (
    <MainContainer>
      <HalfHeader />
      {renderProfile()}
      {renderTitles()}
      <ScrollWrapper
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {renderContent()}
      </ScrollWrapper>
      {renderShowInterest()}

      <ConfirmationModal
        visible={cancelReasonModal}
        onPress={hanldeAppliedForJob}
        onHide={onHandleCancelReasonModal}
        yesbuttonTitle="Yes"
        nobuttonTitle="No"
        icon={icons.warning}
        firstDescription="Apply for Job"
        placeholder="Are you sure you want to apply for job?"
      />
    </MainContainer>
  );
};

export default VacancyJobDetails;
