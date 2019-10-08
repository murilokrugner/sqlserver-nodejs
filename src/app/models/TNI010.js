/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNI010', {
    TNI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNI_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNI_NOMPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TNI_DTIMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNI_DTINPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNI_DTFIPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNI_DTINRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNI_DTFIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNI_OQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNI_QUEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNI_ONDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNI_PORQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNI_COMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNI_CUSTOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_CUSTOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_QTDEAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_META: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_QTDEFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_QDOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TNI_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TNI_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNI_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNI_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNI_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_DOCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNI_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TNI_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNI_FUNRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNI_TIPOPL: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNI_DETALH: {
      type: "IMAGE",
      allowNull: true
    },
    TNI_MMSYP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNI_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'TNI010'
  });
};
