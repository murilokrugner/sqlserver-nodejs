/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED001L', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CUIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    INSPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    CODPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PASSCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    ENTATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PASSENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    TOKEN: {
      type: "IMAGE",
      allowNull: true
    },
    TOKEN_WSFE: {
      type: "IMAGE",
      allowNull: true
    },
    SIGN_WSFE: {
      type: "IMAGE",
      allowNull: true
    },
    TOKENWSMTX: {
      type: "IMAGE",
      allowNull: true
    },
    SIGNWSMTX: {
      type: "IMAGE",
      allowNull: true
    },
    TOKENWSBFE: {
      type: "IMAGE",
      allowNull: true
    },
    SIGNWSBFE: {
      type: "IMAGE",
      allowNull: true
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    XMLSIGN: {
      type: "IMAGE",
      allowNull: true
    },
    RUC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TOKENWSCDC: {
      type: "VARBINARY",
      allowNull: true
    },
    SIGNWSCDC: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'SPED001L'
  });
};
