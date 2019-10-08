/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EYY010', {
    EYY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EYY_PREEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EYY_RE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EYY_NFSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EYY_SERSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYY_NFENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EYY_SERENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYY_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EYY_FOLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EYY_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EYY_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EYY_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EYY_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    EYY_NROMEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EYY_DTMEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EYY_SDOCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYY_SDOCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYY_D1ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EYY_D1PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EYY_SEQEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EYY_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    EYY_SQFNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'EYY010'
  });
};
