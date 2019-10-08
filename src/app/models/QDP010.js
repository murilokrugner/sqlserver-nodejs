/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QDP010', {
    QDP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDP_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QDP_DTOBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDP_DTOORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDP_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDP_DESSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QDP_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDP_HRGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDP_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDP_DTBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDP_HRBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDP_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDP_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDP_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDP_TPRCBT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDP_FMATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDP_MATBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDP_DEPBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QDP_APROVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDP_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDP_TPSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDP_ARQDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QDP_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QDP_TIPMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QDP_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDP_SITSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDP_CODTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QDP_FILELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDP_MATELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    }
  }, {
    tableName: 'QDP010'
  });
};
