/*-------------------------------------------------------------------------
 *
 * MinaServerHandler.java
 * MinaServerHandler类
 *
 * 版权所有 (c) 2019-2024, 易景科技保留所有权利。
 * Copyright (c) 2019-2024, Halo Tech Co.,Ltd. All rights reserved.
 *
 * 易景科技是Halo Database、Halo Database Management System、羲和数据
 * 库、羲和数据库管理系统（后面简称 Halo ）软件的发明人同时也为知识产权权
 * 利人。Halo 软件的知识产权，以及与本软件相关的所有信息内容（包括但不限
 * 于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）
 * 均受中华人民共和国法律法规和相应的国际条约保护，易景科技享有上述知识产
 * 权，但相关权利人依照法律规定应享有的权利除外。未免疑义，本条所指的“知识
 * 产权”是指任何及所有基于 Halo 软件产生的：（a）版权、商标、商号、域名、与
 * 商标和商号相关的商誉、设计和专利；与创新、技术诀窍、商业秘密、保密技术、非
 * 技术信息相关的权利；（b）人身权、掩模作品权、署名权和发表权；以及（c）在
 * 本协议生效之前已存在或此后出现在世界任何地方的其他工业产权、专有权、与“知
 * 识产权”相关的权利，以及上述权利的所有续期和延长，无论此类权利是否已在相
 * 关法域内的相关机构注册。
 *
 * This software and related documentation are provided under a license
 * agreement containing restrictions on use and disclosure and are 
 * protected by intellectual property laws. Except as expressly permitted
 * in your license agreement or allowed by law, you may not use, copy, 
 * reproduce, translate, broadcast, modify, license, transmit, distribute,
 * exhibit, perform, publish, or display any part, in any form, or by any
 * means. Reverse engineering, disassembly, or decompilation of this 
 * software, unless required by law for interoperability, is prohibited.
 *
 * This software is developed for general use in a variety of
 * information management applications. It is not developed or intended
 * for use in any inherently dangerous applications, including applications
 * that may create a risk of personal injury. If you use this software or
 * in dangerous applications, then you shall be responsible to take all
 * appropriate fail-safe, backup, redundancy, and other measures to ensure
 * its safe use. Halo Corporation and its affiliates disclaim any 
 * liability for any damages caused by use of this software in dangerous
 * applications.
 *
 *
 * IDENTIFICATION
 *    /hmt-rpc/src/main/java/com/wugui/hmt/rpc/old/remoting/net/impl/mina/server/MinaServerHandler.java
 *
 *-----------------------------------------------
 */
package com.wugui.hmt.rpc.old.remoting.net.impl.mina.server;//package com.xxl.rpc.remoting.net.impl.mina.server;
//
//import com.xxl.rpc.remoting.net.params.Beat;
//import com.xxl.rpc.remoting.net.params.XxlRpcRequest;
//import com.xxl.rpc.remoting.net.params.XxlRpcResponse;
//import com.xxl.rpc.remoting.provider.XxlRpcProviderFactory;
//import com.xxl.rpc.util.ThrowableUtil;
//import org.apache.mina.core.service.IoHandlerAdapter;
//import org.apache.mina.core.session.IdleStatus;
//import org.apache.mina.core.session.IoSession;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.util.concurrent.ThreadPoolExecutor;
//
///**
// * mina server handler
// *
// * @author xuxueli
// *
// */
//public class MinaServerHandler extends IoHandlerAdapter {
//	private static Logger logger = LoggerFactory.getLogger(MinaServerHandler.class);
//
//
//	private XxlRpcProviderFactory xxlRpcProviderFactory;
//	private ThreadPoolExecutor serverHandlerPool;
//
//
//	public MinaServerHandler(final XxlRpcProviderFactory xxlRpcProviderFactory, final ThreadPoolExecutor serverHandlerPool) {
//		this.xxlRpcProviderFactory = xxlRpcProviderFactory;
//		this.serverHandlerPool = serverHandlerPool;
//	}
//
//	@Override
//	public void messageReceived(final IoSession session, Object message) throws Exception {
//
//        // request
//        final XxlRpcRequest xxlRpcRequest = (XxlRpcRequest) message;
//
//        // filter beat
//        if (Beat.BEAT_ID.equalsIgnoreCase(xxlRpcRequest.getRequestId())){
//            return;
//        }
//
//        // do invoke
//        try {
//            serverHandlerPool.execute(new Runnable() {
//                @Override
//                public void run() {
//                    // invoke + response
//                    XxlRpcResponse xxlRpcResponse = xxlRpcProviderFactory.invokeService(xxlRpcRequest);
//
//                    session.write(xxlRpcResponse);
//                }
//            });
//        } catch (Exception e) {
//            // catch error
//            XxlRpcResponse xxlRpcResponse = new XxlRpcResponse();
//            xxlRpcResponse.setRequestId(xxlRpcRequest.getRequestId());
//            xxlRpcResponse.setErrorMsg(ThrowableUtil.toString(e));
//
//            session.write(xxlRpcResponse);
//        }
//
//	}
//
//	@Override
//	public void exceptionCaught(IoSession session, Throwable cause) throws Exception {
//		logger.error(">>>>>>>>>>> xxl-rpc provider mina server caught exception", cause);
//		session.closeOnFlush();
//	}
//
//	@Override
//	public void sessionCreated(IoSession session) throws Exception {
//		//super.sessionCreated(session);
//		session.getConfig().setIdleTime(IdleStatus.BOTH_IDLE, 10*60);
//	}
//
//	@Override
//	public void sessionIdle(IoSession session, IdleStatus status) throws Exception {
//		//super.sessionIdle(session, status);
//		if(status == IdleStatus.BOTH_IDLE){
//			session.closeOnFlush();
//			logger.debug(">>>>>>>>>>> xxl-rpc provider mina server close an idle session.");
//		}
//	}
//
//}