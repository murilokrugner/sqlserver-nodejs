/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FK2010', {
    FK2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_IDFK2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK2_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK2_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK2_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK2_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK2_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK2_TPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FK2_VLMOE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK2_MOTBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK2_ORDREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FK2_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_ARCNAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    FK2_CNABOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_TXMOED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FK2_SERREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FK2_MULNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK2_AUTBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    FK2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FK2_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FK2_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FK2_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FK2_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FK2_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK2_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FK2_IDCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FK2_IDPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    tableName: 'FK2010'
  });
};
