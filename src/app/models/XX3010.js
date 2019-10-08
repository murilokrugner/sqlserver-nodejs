/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XX3010', {
    XX3_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    XX3_UUID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    XX3_FUNCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XX3_FUNDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    XX3_TRHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_PRHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_TENTAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XX3_TNHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_TRANS: {
      type: "IMAGE",
      allowNull: true
    },
    XX3_TPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX3_TPTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX3_TMHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_RECPHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_RESPHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_MSGTYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XX3_CHANEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX3_REFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    XX3_URL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    XX3_WBSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    XX3_RETURN: {
      type: "IMAGE",
      allowNull: true
    },
    XX3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XX3_TRDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_PRDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_TNDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_TMDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_RECPDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_RESPDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XX3_PROUTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XX3_SROUTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XX3_TRANS2: {
      type: "VARBINARY",
      allowNull: true
    },
    XX3_ORUUID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    XX3_PRODUC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XX3_SOURCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XX3_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'XX3010'
  });
};
