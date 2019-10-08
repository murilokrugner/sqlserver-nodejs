/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WF6010', {
    WF6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WF6_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    WF6_PARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF6_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WF6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    WF6_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WF6_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WF6_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    WF6_ACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    WF6_DE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF6_IDENT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WF6_IDENT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WF6_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    WF6_DTVISU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WF6_HRVISU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WF6_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WF6_HRVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WF6_DTRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WF6_HRRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WF6_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    }
  }, {
    tableName: 'WF6010'
  });
};
