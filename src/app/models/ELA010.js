/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ELA010', {
    ELA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELA_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELA_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ELA_EXPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ELA_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELA_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ELA_LOJIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELA_NRINVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ELA_INT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELA_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ELA_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ELA_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ELA_VL_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_STTPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELA_SLDPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_VLCAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_VLEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_TX_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_VL_REA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_TX_PED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_PARIDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELA_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ELA_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    ELA_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ELA_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ELA_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ELA_IMPINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ELA_ILJINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELA_EXPINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ELA_ELJINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELA_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'ELA010'
  });
};
